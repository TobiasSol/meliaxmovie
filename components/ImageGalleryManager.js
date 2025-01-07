import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function ImageGalleryManager() {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadedUrl, setUploadedUrl] = useState(null);

  useEffect(() => {
    loadImages();
  }, []);

  const loadImages = async () => {
    const { data, error } = await supabase.storage
      .from('images')
      .list('', {
        sortBy: { column: 'created_at', order: 'desc' }
      });

    if (data) {
      const imagesWithMetadata = await Promise.all(
        data.map(async (file) => {
          const { data: metadata } = await supabase
            .from('image_metadata')
            .select('*')
            .eq('image_path', file.name)
            .single();

          return {
            ...file,
            metadata: metadata || {},
            publicUrl: supabase.storage
              .from('images')
              .getPublicUrl(file.name).data.publicUrl
          };
        })
      );
      setImages(imagesWithMetadata);
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    setError(null);
    setUploadedUrl(null);

    const formData = new FormData();
    formData.append('image', file);

    try {
      const token = localStorage.getItem('adminToken');
      if (!token) throw new Error('Nicht eingeloggt');

      const response = await fetch('/api/admin/upload-image', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Upload fehlgeschlagen');
      }

      setUploadedUrl(data.publicUrl);
      
      await saveImageMetadata(data.publicUrl, {
        title: '',
        description: '',
        alt: '',
        uploadDate: new Date().toISOString(),
        position: images.length
      });
      
      await loadImages();
      
    } catch (error) {
      console.error('Upload error:', error);
      setError(error.message);
    } finally {
      setUploading(false);
      e.target.value = '';
    }
  };

  const saveImageMetadata = async (imagePath, metadata) => {
    const { error } = await supabase
      .from('image_metadata')
      .upsert({
        image_path: imagePath,
        title: metadata.title,
        description: metadata.description,
        alt: metadata.alt,
        upload_date: metadata.uploadDate,
        position: metadata.position
      });

    if (error) console.error('Metadata save error:', error);
  };

  const handleDelete = async (imagePath) => {
    if (!confirm('Möchten Sie dieses Bild wirklich löschen?')) return;

    const { error: storageError } = await supabase.storage
      .from('images')
      .remove([imagePath]);

    if (!storageError) {
      await supabase
        .from('image_metadata')
        .delete()
        .eq('image_path', imagePath);
      
      await loadImages();
    }
  };

  const onDragEnd = async (result) => {
    if (!result.destination) return;

    const items = Array.from(images);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setImages(items);

    // Update positions in database
    await Promise.all(
      items.map((item, index) => 
        saveImageMetadata(item.name, { ...item.metadata, position: index })
      )
    );
  };

  return (
    <div className="space-y-4 bg-gray-900 p-6 rounded-lg">
      <h2 className="text-xl font-bold text-[#e3cbaa] mb-4">Bilder Upload</h2>

      <div className="flex flex-col space-y-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          disabled={uploading}
          className="hidden"
          id="image-upload"
        />
        <label
          htmlFor="image-upload"
          className={`inline-flex items-center justify-center px-4 py-2 rounded
            ${uploading 
              ? 'bg-gray-600 cursor-not-allowed' 
              : 'bg-[#d0b48f] hover:bg-[#e3cbaa] cursor-pointer'} 
            text-black font-medium transition-colors`}
        >
          {uploading ? 'Wird hochgeladen...' : 'Bild auswählen'}
        </label>

        {error && (
          <div className="bg-red-500/10 border border-red-500 text-red-500 p-4 rounded">
            {error}
          </div>
        )}
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="images">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {images.map((image, index) => (
                <Draggable
                  key={image.name}
                  draggableId={image.name}
                  index={index}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="relative bg-gray-800 p-4 rounded-lg"
                    >
                      <img
                        src={image.publicUrl}
                        alt={image.metadata.alt || 'Uploaded image'}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <div className="mt-2 space-y-2">
                        <input
                          type="text"
                          placeholder="Titel"
                          value={image.metadata.title || ''}
                          onChange={(e) => saveImageMetadata(image.name, {
                            ...image.metadata,
                            title: e.target.value
                          })}
                          className="w-full bg-gray-700 p-2 rounded"
                        />
                        <input
                          type="text"
                          placeholder="Alt-Text"
                          value={image.metadata.alt || ''}
                          onChange={(e) => saveImageMetadata(image.name, {
                            ...image.metadata,
                            alt: e.target.value
                          })}
                          className="w-full bg-gray-700 p-2 rounded"
                        />
                        <textarea
                          placeholder="Beschreibung"
                          value={image.metadata.description || ''}
                          onChange={(e) => saveImageMetadata(image.name, {
                            ...image.metadata,
                            description: e.target.value
                          })}
                          className="w-full bg-gray-700 p-2 rounded"
                        />
                        <div className="text-sm text-gray-400">
                          Hochgeladen: {new Date(image.metadata.uploadDate).toLocaleString()}
                        </div>
                        <button
                          onClick={() => handleDelete(image.name)}
                          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                        >
                          Löschen
                        </button>
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
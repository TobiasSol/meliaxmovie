import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Trash2, Image as ImageIcon, Edit, Save, X } from 'lucide-react';

export default function ImageGalleryManager() {
 const [images, setImages] = useState([]);
 const [editingImage, setEditingImage] = useState(null);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);

 useEffect(() => {
   fetchImages();
 }, []);


 
// ImageGalleryManager.js
const fetchImages = async () => {
  try {
    const token = localStorage.getItem('adminToken');
    // Der Header fehlt hier:
    const response = await fetch('/api/admin/images', {
      headers: {
        'Authorization': `Bearer ${token}`,  // <-- Dies fehlt
      }
    });

     if (!response.ok) throw new Error('Failed to fetch images');
     const data = await response.json();
     setImages(data);
   } catch (error) {
     setError(error.message);
   } finally {
     setLoading(false);
   }
 };


 const handleImageUpload = async (e) => {
   try {
     setLoading(true);
     const file = e.target.files[0];
     const token = localStorage.getItem('adminToken');
     
     const formData = new FormData();
     formData.append('file', file);

     const response = await fetch('/api/admin/upload-image', {
       method: 'POST',
       headers: {
         'Authorization': `Bearer ${token}`
       },
       body: formData
     });

     if (!response.ok) throw new Error('Upload failed');
     await fetchImages();
   } catch (error) {
     setError(error.message);
   } finally {
     setLoading(false);
   }
 };

 const handleDragEnd = async (result) => {
   if (!result.destination) return;

   const items = Array.from(images);
   const [reorderedItem] = items.splice(result.source.index, 1);
   items.splice(result.destination.index, 0, reorderedItem);

   setImages(items);

   try {
     const token = localStorage.getItem('adminToken');
     const response = await fetch('/api/admin/images/reorder', {
       method: 'POST',
       headers: {
         'Authorization': `Bearer ${token}`,
         'Content-Type': 'application/json'
       },
       body: JSON.stringify({
         images: items.map((item, index) => ({
           id: item.id,
           position: index
         }))
       })
     });

     if (!response.ok) throw new Error('Failed to update image positions');
   } catch (error) {
     setError(error.message);
     await fetchImages();
   }
 };

 const handleDelete = async (image) => {
   if (!confirm('Are you sure you want to delete this image?')) return;

   try {
     const token = localStorage.getItem('adminToken');
     const response = await fetch(`/api/admin/images/${image.id}`, {
       method: 'DELETE',
       headers: {
         'Authorization': `Bearer ${token}`
       }
     });

     if (!response.ok) throw new Error('Failed to delete image');
     await fetchImages();
   } catch (error) {
     setError(error.message);
   }
 };

 const handleMetadataUpdate = async (imageId, updates) => {
   try {
     const token = localStorage.getItem('adminToken');
     const response = await fetch(`/api/admin/images/${imageId}`, {
       method: 'PUT', 
       headers: {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${token}`
       },
       body: JSON.stringify(updates)
     });

     if (!response.ok) throw new Error('Failed to update metadata');
     await fetchImages();
     setEditingImage(null);
   } catch (error) {
     setError(error.message);
   }
 };

 const ImageEditor = ({ image }) => {
   const [formData, setFormData] = useState({
     title: image.title || '',
     description: image.description || '',
     alt: image.alt || '', 
     seo_title: image.seo_title || '',
     seo_description: image.seo_description || ''
   });

   return (
     <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
       <div className="bg-gray-900 p-6 rounded-lg max-w-2xl w-full mx-4">
         <div className="flex justify-between items-center mb-4">
           <h3 className="text-xl font-bold text-[#e3cbaa]">Edit Image Metadata</h3>
           <button onClick={() => setEditingImage(null)}>
             <X className="text-gray-400 hover:text-white" />
           </button>
         </div>

         <div className="grid grid-cols-1 gap-4">
           <div>
             <label className="block text-[#d0b48f] mb-2">Title</label>
             <input
               type="text"
               value={formData.title}
               onChange={(e) => setFormData({...formData, title: e.target.value})}
               className="w-full bg-black border border-[#d0b48f] rounded p-2 text-white"
             />
           </div>

           <div>
             <label className="block text-[#d0b48f] mb-2">Description</label>
             <textarea
               value={formData.description}
               onChange={(e) => setFormData({...formData, description: e.target.value})}
               className="w-full bg-black border border-[#d0b48f] rounded p-2 text-white"
               rows="3"
             />
           </div>

           <div>
             <label className="block text-[#d0b48f] mb-2">Alt Text</label>
             <input
               type="text"
               value={formData.alt}
               onChange={(e) => setFormData({...formData, alt: e.target.value})}
               className="w-full bg-black border border-[#d0b48f] rounded p-2 text-white"
             />
           </div>

           <div>
             <label className="block text-[#d0b48f] mb-2">SEO Title</label>
             <input
               type="text"
               value={formData.seo_title}
               onChange={(e) => setFormData({...formData, seo_title: e.target.value})}
               className="w-full bg-black border border-[#d0b48f] rounded p-2 text-white"
             />
           </div>

           <div>
             <label className="block text-[#d0b48f] mb-2">SEO Description</label>
             <textarea
               value={formData.seo_description}
               onChange={(e) => setFormData({...formData, seo_description: e.target.value})}
               className="w-full bg-black border border-[#d0b48f] rounded p-2 text-white"
               rows="3"
             />
           </div>
         </div>

         <div className="flex justify-end mt-6">
           <button
             onClick={() => handleMetadataUpdate(image.id, formData)}
             className="bg-[#d0b48f] text-black px-4 py-2 rounded hover:bg-[#e3cbaa]"
           >
             Save Changes
           </button>
         </div>
       </div>
     </div>
   );
 };

 if (loading) {
   return <div className="p-4">Loading...</div>;
 }

 return (
  <div className="space-y-8">
    <div className="bg-gray-900 p-6 rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-[#e3cbaa]">Gallery Management</h2>
        <label className="cursor-pointer">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
          <span className="bg-[#d0b48f] text-black px-4 py-2 rounded hover:bg-[#e3cbaa]">
            Upload Image
          </span>
        </label>
      </div>
 
      {error && (
        <div className="bg-red-500/10 border border-red-500 text-red-500 p-4 rounded mb-6">
          {error}
        </div>
      )}
 
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="gallery" key="gallery">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {images.map((image, index) => (
                <Draggable
                  key={image.id}
                  draggableId={image.id.toString()}
                  index={index}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="bg-black rounded-lg overflow-hidden border border-gray-800"
                    >
                      <div className="aspect-square relative">
                        <img
                          src={image.publicUrl}
                          alt={image.alt || 'Gallery image'}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="p-4">
                        <h3 className="text-[#e3cbaa] font-bold mb-2">{image.title || 'Untitled'}</h3>
                        <div className="flex justify-end space-x-2">
                          <button
                            onClick={() => setEditingImage(image)}
                            className="p-2 text-[#d0b48f] hover:text-[#e3cbaa]"
                          >
                            <Edit size={20} />
                          </button>
                          <button
                            onClick={() => handleDelete(image)}
                            className="p-2 text-red-500 hover:text-red-400"
                          >
                            <Trash2 size={20} />
                          </button>
                        </div>
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
 
    {editingImage && <ImageEditor image={editingImage} />}
  </div>
 );
}
// components/UploadProgress.js
import { useState } from 'react';

export function UploadProgress({ progress }) {
  return (
    <div className="w-full bg-gray-700 rounded-full h-2.5 my-4">
      <div 
        className="bg-[#d0b48f] h-2.5 rounded-full transition-all duration-300"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}

// Erweiterter handleFileUpload im VideoManagement
const handleFileUpload = async (file, directory) => {
  try {
    console.log('Starting file upload:', {
      name: file.name,
      size: file.size,
      type: file.type,
      directory
    });

    const formData = new FormData();
    formData.append('file', file);
    formData.append('path', directory);

    // Validate file size
    const maxSize = 500 * 1024 * 1024; // 500MB
    if (file.size > maxSize) {
      const error = new Error('Datei ist zu groß');
      error.details = `Maximum: 500MB, Aktuelle Größe: ${(file.size / (1024 * 1024)).toFixed(2)}MB`;
      throw error;
    }

    setUploadProgress(0);
    setUploading(true);
    setUploadError(null);

    const response = await fetch('/api/upload', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
      },
      body: formData
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Upload response error:', data);
      throw new Error(data.error || data.message || 'Upload fehlgeschlagen');
    }

    console.log('Upload successful:', data);
    setUploadProgress(100);
    return data.publicUrl;

  } catch (error) {
    console.error('Upload error:', error);
    setUploadError(error.message);
    throw error;
  } finally {
    setUploading(false);
  }
};
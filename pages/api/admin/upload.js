// pages/api/upload.js
import formidable from 'formidable';
import { createClient } from '@supabase/supabase-js';
import fs from 'fs/promises';

export const config = {
  api: {
    bodyParser: false,
    responseLimit: '500mb',
  },
};

// Initialisiere Supabase mit detailliertem Logging
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  }
);

export default async function handler(req, res) {
  // Request Logging
  console.log('=== Upload Request Started ===');
  console.log('Method:', req.method);
  console.log('Headers:', req.headers);

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Formidable Konfiguration
    console.log('Initializing formidable...');
    const form = formidable({
      maxFileSize: 500 * 1024 * 1024, // 500MB Limit
      maxFields: 5,
      keepExtensions: true,
      multiples: false,
    });
    
    // Parse Form Data
    console.log('Parsing form data...');
    const [fields, files] = await new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) {
          console.error('Form parsing error:', err);
          reject(err);
          return;
        }
        console.log('Form parsed successfully');
        console.log('Fields received:', fields);
        console.log('Files received:', Object.keys(files));
        resolve([fields, files]);
      });
    });

    // File Validation
    console.log('Validating file...');
    const fileArray = Object.values(files)[0];
    if (!fileArray || !fileArray[0]) {
      console.error('No file found in request');
      return res.status(400).json({ error: 'No file provided' });
    }

    const file = fileArray[0];
    console.log('File details:', {
      originalName: file.originalFilename,
      size: file.size,
      type: file.mimetype,
      path: file.filepath
    });

    // Size Validation
    const maxSize = 500 * 1024 * 1024; // 500MB
    if (file.size > maxSize) {
      console.error(`File too large: ${file.size} bytes`);
      return res.status(400).json({ 
        error: 'File too large', 
        maxSize: '500MB',
        receivedSize: `${(file.size / (1024 * 1024)).toFixed(2)}MB`
      });
    }

    // Prepare File Upload
    console.log('Preparing file for upload...');
    const originalName = file.originalFilename || file.newFilename || 'upload';
    const fileExt = originalName.split('.').pop() || '';
    const fileName = `${Date.now()}_${Math.random().toString(36).substr(2, 9)}.${fileExt}`;
    const filePath = `${fields.path || 'uploads'}/${fileName}`;

    // Read File
    console.log('Reading file from disk...');
    const fileBuffer = await fs.readFile(file.filepath);
    console.log('File read complete. Size:', fileBuffer.length);

    // Upload to Supabase
    console.log('Uploading to Supabase...');
    console.log('Target path:', filePath);
    const { data, error: uploadError } = await supabase.storage
      .from('videos')
      .upload(filePath, fileBuffer, {
        contentType: file.mimetype || 'application/octet-stream',
        cacheControl: '3600',
        upsert: false
      });

    if (uploadError) {
      console.error('Supabase upload error:', uploadError);
      return res.status(500).json({ 
        error: 'Upload failed', 
        details: uploadError,
        suggestion: 'Check Supabase storage permissions and bucket configuration'
      });
    }

    // Get Public URL
    console.log('Getting public URL...');
    const { data: urlData } = supabase.storage
      .from('videos')
      .getPublicUrl(filePath);

    // Cleanup
    console.log('Cleaning up temporary file...');
    await fs.unlink(file.filepath);

    // Success Response
    console.log('Upload completed successfully');
    return res.status(200).json({
      success: true,
      data: data,
      publicUrl: urlData.publicUrl,
      fileInfo: {
        name: fileName,
        size: file.size,
        type: file.mimetype,
        path: filePath
      }
    });

  } catch (error) {
    // Error Handling
    console.error('=== Upload Error ===');
    console.error('Error type:', error.constructor.name);
    console.error('Error message:', error.message);
    console.error('Error stack:', error.stack);

    return res.status(500).json({ 
      error: 'Upload failed', 
      details: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined,
      type: error.constructor.name
    });
  }
}
import formidable from 'formidable';
import { createClient } from '@supabase/supabase-js';
import fs from 'fs/promises';

export const config = {
  api: {
    bodyParser: false,
    responseLimit: false,
  },
};

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const form = formidable({
      maxFileSize: 500 * 1024 * 1024, // 500MB
    });

    const [fields, files] = await new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) reject(err);
        resolve([fields, files]);
      });
    });

    const fileArray = Object.values(files)[0];
    if (!fileArray || !fileArray[0]) {
      return res.status(400).json({ error: 'No file provided' });
    }

    const file = fileArray[0];
    const fileBuffer = await fs.readFile(file.filepath);
    
    const fileName = `${Date.now()}_${Math.random().toString(36).substr(2, 9)}.${file.originalFilename.split('.').pop()}`;
    const filePath = `${fields.path || 'uploads'}/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from('videos')
      .upload(filePath, fileBuffer, {
        contentType: file.mimetype,
        upsert: false
      });

    if (uploadError) {
      throw uploadError;
    }

    // Get Public URL
    const { data: urlData } = supabase.storage
      .from('videos')
      .getPublicUrl(filePath);

    // Cleanup
    await fs.unlink(file.filepath);

    return res.status(200).json({
      success: true,
      publicUrl: urlData.publicUrl
    });

  } catch (error) {
    console.error('Upload error:', error);
    return res.status(500).json({ error: error.message || 'Upload failed' });
  }
}
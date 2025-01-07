// pages/api/admin/upload-image.js
import { withAuth } from '../../../utils/withAuth';
import formidable from 'formidable';
import { createClient } from '@supabase/supabase-js';

export const config = {
  api: {
    bodyParser: false,
  },
};

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const form = formidable();
    const [fields, files] = await new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) reject(err);
        resolve([fields, files]);
      });
    });

    const file = files.file[0];
    const fileName = `${Date.now()}_${file.originalFilename}`;

    const { data, error: uploadError } = await supabase.storage
      .from('nudes')
      .upload(fileName, file);

    if (uploadError) throw uploadError;

    const { data: imageData } = await supabase
      .from('image_metadata')
      .insert([
        {
          image_path: fileName,
          title: file.originalFilename,
        }
      ])
      .select()
      .single();

    res.status(200).json(imageData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export default withAuth(handler);
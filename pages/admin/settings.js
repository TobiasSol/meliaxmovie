// pages/api/admin/settings.js
import { createClient } from '@supabase/supabase-js';
import { withAuth } from '../../../utils/withAuth';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function handler(req, res) {
  console.log('Settings API called, method:', req.method);
  
  try {
    switch (req.method) {
      case 'GET':
        const { data, error } = await supabase
          .from('settings')
          .select('*')
          .single();

        if (error) {
          console.error('Supabase GET error:', error);
          throw error;
        }

        console.log('Settings data found:', data);
        return res.status(200).json(data || {
          passwordprotectionenabled: false,
          preloaderenabled: true,
          sitepassword: ''
        });

      case 'POST':
        const settings = req.body;
        console.log('Updating settings:', settings);

        const { data: updated, error: updateError } = await supabase
          .from('settings')
          .upsert([{
            id: 1,
            ...settings,
            updated_at: new Date().toISOString()
          }])
          .select()
          .single();

        if (updateError) {
          console.error('Supabase POST error:', updateError);
          throw updateError;
        }

        console.log('Settings updated:', updated);
        return res.status(200).json(updated);

      default:
        return res.status(405).json({ message: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Settings API error:', error);
    return res.status(500).json({
      message: 'Internal Server Error',
      error: error.message
    });
  }
}

export default withAuth(handler);
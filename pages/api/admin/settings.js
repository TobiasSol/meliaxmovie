// pages/api/admin/settings.js
import { adminSupabase } from '../../../utils/supabase-client';
import { withAuth } from '../../../utils/withAuth';

async function handler(req, res) {
  console.log('Settings API called with method:', req.method); // Debug log

  try {
    // GET Request
    if (req.method === 'GET') {
      console.log('Attempting to fetch settings from Supabase');
      
      const { data, error } = await adminSupabase
        .from('settings')
        .select('*')
        .single();

      if (error) {
        console.error('Supabase fetch error:', error);
        throw error;
      }

      console.log('Settings fetched successfully:', data);

      return res.status(200).json(data || {
        passwordprotectionenabled: false,
        preloaderenabled: true,
        sitepassword: ''
      });
    }

    // POST Request
    if (req.method === 'POST') {
      const settings = req.body;
      console.log('Attempting to update settings:', settings);

      const { data, error } = await adminSupabase
        .from('settings')
        .upsert([{
          id: 1, // Assuming we always use ID 1 for settings
          ...settings,
          updated_at: new Date().toISOString()
        }])
        .select()
        .single();

      if (error) {
        console.error('Supabase update error:', error);
        throw error;
      }

      console.log('Settings updated successfully:', data);
      return res.status(200).json(data);
    }

    return res.status(405).json({ message: 'Method not allowed' });

  } catch (error) {
    console.error('Settings API Error:', error);
    return res.status(500).json({
      message: 'Internal server error',
      error: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
}

export default withAuth(handler);
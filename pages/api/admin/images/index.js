// pages/api/admin/images/index.js
import { withAuth } from '../../../../utils/withAuth';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
 process.env.NEXT_PUBLIC_SUPABASE_URL,
 process.env.SUPABASE_SERVICE_ROLE_KEY
);

// pages/api/admin/images/index.js - Fügen Sie Logging hinzu:
async function handler(req, res) {
    console.log("Auth Header:", req.headers.authorization); // Debug-Log
    
    if (!req.headers.authorization?.startsWith('Bearer ')) {
      console.log("Invalid header format"); // Debug-Log
      return res.status(401).json({ error: 'Invalid Authorization header' });
    }
  
    const token = req.headers.authorization.split(' ')[1];
    console.log("Token:", token); // Debug-Log
  
    try {
      const { data: metadata, error } = await supabase
        .from('image_metadata')
        .select('*')
        .order('position');
  
      if (error) {
        console.error("Supabase Error:", error); // Debug-Log
        throw error;
      }
  
      console.log("Metadata:", metadata); // Debug-Log
  
      const images = metadata.map(img => ({
        ...img,
        publicUrl: supabase.storage
          .from('nudes')  // Bucket-Name muss 'nudes' sein
          .getPublicUrl(img.image_path).data.publicUrl
      }));
  
      return res.status(200).json(images);
    } catch (error) {
      console.error("Full Error:", error); // Debug-Log
      return res.status(400).json({ error: error.message });
    }
  }

export default withAuth(handler);
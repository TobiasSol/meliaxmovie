// pages/api/admin/images/[id].js
import { withAuth } from '../../../../utils/withAuth';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function handler(req, res) {
  const { id } = req.query;

  switch (req.method) {
    case 'PUT':
      const { data, error } = await supabase
        .from('image_metadata')
        .update(req.body)
        .eq('id', id)
        .select()
        .single();
        
      if (error) return res.status(400).json({ error: error.message });
      return res.status(200).json(data);

    case 'DELETE':
      const { error: deleteError } = await supabase
        .from('image_metadata')
        .delete()
        .eq('id', id);
        
      if (deleteError) return res.status(400).json({ error: deleteError.message });
      return res.status(200).json({ success: true });

    default:
      res.status(405).json({ error: 'Method not allowed' });
  }
}

export default withAuth(handler);
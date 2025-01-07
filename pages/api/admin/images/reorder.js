// pages/api/admin/images/reorder.js
import { withAuth } from '../../../../utils/withAuth';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { images } = req.body;

  try {
    const promises = images.map(({ id, position }) =>
      supabase
        .from('image_metadata')
        .update({ position })
        .eq('id', id)
    );

    await Promise.all(promises);
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export default withAuth(handler);
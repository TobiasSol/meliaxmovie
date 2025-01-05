// pages/api/admin/videos.js
import { supabase, adminSupabase } from '../../../utils/supabase-client';

export default async function handler(req, res) {
 console.log('Videos API called with method:', req.method);

 try {
   // GET Request - Öffentlicher Zugriff
   if (req.method === 'GET') {
     const { data, error } = await supabase
       .from('videos')
       .select('*')
       .order('created_at', { ascending: false });

     if (error) {
       console.error('Supabase error:', error);
       throw error;
     }

     return res.status(200).json(data || []);
   }

   // Ab hier prüfen wir die Authentifizierung für admin Operationen
   const token = req.headers.authorization?.split(' ')[1];
   if (!token) {
     return res.status(401).json({ message: 'Unauthorized - No token provided' });
   }

   // POST Request - Nur für Admins
   if (req.method === 'POST') {
     const videoData = req.body;
     console.log('Received video data:', videoData);

     const { data, error } = await adminSupabase
       .from('videos')
       .insert([{
         ...videoData,
         created_at: new Date().toISOString()
       }])
       .select()
       .single();

     if (error) {
       console.error('Supabase insert error:', error);
       throw error;
     }

     return res.status(201).json(data);
   }

   // PUT Request - Nur für Admins
   if (req.method === 'PUT') {
     const { id } = req.query;
     const updateData = req.body;

     const { data, error } = await adminSupabase
       .from('videos')
       .update(updateData)
       .eq('id', id)
       .select()
       .single();

     if (error) {
       console.error('Supabase update error:', error);
       throw error;
     }

     return res.status(200).json(data);
   }

   // DELETE Request - Nur für Admins
   if (req.method === 'DELETE') {
     const { id } = req.query;

     const { error } = await adminSupabase
       .from('videos')
       .delete()
       .eq('id', id);

     if (error) {
       console.error('Supabase delete error:', error);
       throw error;
     }

     return res.status(200).json({ message: 'Video successfully deleted' });
   }

   return res.status(405).json({ message: 'Method not allowed' });

 } catch (error) {
   console.error('Videos API Error:', error);
   return res.status(500).json({
     message: 'Internal Server Error',
     details: error.message,
     stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
   });
 }
}
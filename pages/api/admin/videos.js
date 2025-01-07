import { createClient } from '@supabase/supabase-js';
import { verify } from 'jsonwebtoken';

// Initialisiere Supabase Client einmal als Modul-Variable
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export default async function handler(req, res) {
  try {
    // Authentifizierung prüfen
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'Nicht autorisiert - Token fehlt' });
    }

    // JWT verifizieren
    try {
      verify(token, process.env.JWT_SECRET);
    } catch (error) {
      return res.status(401).json({ message: 'Ungültiger Token' });
    }

    switch (req.method) {
      case 'GET':
        try {
          const { data, error } = await supabase
            .from('videos')
            .select('*')
            .order('created_at', { ascending: false });

          if (error) throw error;
          return res.status(200).json(data || []);
        } catch (error) {
          console.error('GET Error:', error);
          throw error;
        }

      case 'POST':
        try {
          if (!req.body?.title) {
            return res.status(400).json({ message: 'Titel ist erforderlich' });
          }

          const { data, error } = await supabase
            .from('videos')
            .insert([{
              ...req.body,
              created_at: new Date().toISOString()
            }])
            .select()
            .single();

          if (error) throw error;
          return res.status(201).json(data);
        } catch (error) {
          console.error('POST Error:', error);
          throw error;
        }

      case 'PUT':
        try {
          if (!req.query.id) {
            return res.status(400).json({ message: 'Video ID ist erforderlich' });
          }

          const { data, error } = await supabase
            .from('videos')
            .update({
              ...req.body,
              updated_at: new Date().toISOString()
            })
            .eq('id', req.query.id)
            .select()
            .single();

          if (error) throw error;
          return res.status(200).json(data);
        } catch (error) {
          console.error('PUT Error:', error);
          throw error;
        }

      case 'DELETE':
        try {
          if (!req.query.id) {
            return res.status(400).json({ message: 'Video ID ist erforderlich' });
          }

          const { error } = await supabase
            .from('videos')
            .delete()
            .eq('id', req.query.id);

          if (error) throw error;
          return res.status(200).json({ message: 'Video erfolgreich gelöscht' });
        } catch (error) {
          console.error('DELETE Error:', error);
          throw error;
        }

      default:
        return res.status(405).json({ message: 'Method not allowed' });
    }
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ 
      message: 'Interner Server Fehler',
      error: error.message || 'Unbekannter Fehler'
    });
  }
}
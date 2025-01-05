// pages/api/admin/videos/[id].js
import { createClient } from '@supabase/supabase-js';
import { withAuth } from '../../../../utils/withAuth';

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

async function handler(req, res) {
  const { id } = req.query;

  try {
    switch (req.method) {
      case 'GET':
        const { data: video, error: fetchError } = await supabase
          .from('videos')
          .select('*')
          .eq('id', id)
          .single();

        if (fetchError) {
          console.error('Supabase fetch error:', fetchError);
          throw fetchError;
        }
        
        return res.status(200).json(video);

      case 'PUT':
        console.log('PUT Request empfangen');
        console.log('Request Body:', req.body);
        console.log('Video ID:', id);

        try {
          // Prüfe zuerst, ob das Video existiert
          const { data: existingVideo, error: checkError } = await supabase
            .from('videos')
            .select('*')
            .eq('id', id)
            .single();

          if (checkError) {
            console.error('Fehler beim Prüfen des Videos:', checkError);
            return res.status(404).json({ message: 'Video nicht gefunden' });
          }

          // Bereite Update-Daten vor
          const updateData = {
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            thumbnail_url: req.body.thumbnail_url,
            video_url: req.body.video_url
          };

          console.log('Update wird durchgeführt mit:', updateData);

          const { data: result, error: updateError } = await supabase
            .from('videos')
            .update(updateData)
            .eq('id', id)
            .select()
            .single();

          if (updateError) {
            console.error('Update fehlgeschlagen:', updateError);
            return res.status(400).json({ 
              message: 'Update fehlgeschlagen', 
              error: updateError.message 
            });
          }

          console.log('Update erfolgreich:', result);
          return res.status(200).json(result);

        } catch (error) {
          console.error('Unerwarteter Fehler:', error);
          return res.status(500).json({ 
            message: 'Interner Server Fehler', 
            error: error.message 
          });
        }

      case 'DELETE':
        // Zuerst das Video aus der Datenbank löschen
        const { error: deleteError } = await supabase
          .from('videos')
          .delete()
          .eq('id', id);

        if (deleteError) {
          console.error('Supabase delete error:', deleteError);
          throw deleteError;
        }

        // Optional: Hier könnten auch die zugehörigen Dateien aus dem Storage gelöscht werden
        // Dies würde weitere Storage-Operationen erfordern
        // Beispiel:
        // await supabase.storage.from('videos').remove([`path/to/video/${id}`]);
        // await supabase.storage.from('thumbnails').remove([`path/to/thumbnail/${id}`]);

        return res.status(200).json({ 
          message: 'Video erfolgreich gelöscht',
          id: id 
        });

      default:
        return res.status(405).json({ message: 'Methode nicht erlaubt' });
    }
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ 
      message: 'Interner Server Fehler',
      error: error.message,
      details: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
}

export default withAuth(handler);
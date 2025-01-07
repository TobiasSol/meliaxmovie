// utils/supabase-client.js
import { createClient } from '@supabase/supabase-js';

// Hole die Umgebungsvariablen
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

// Debug-Logging
console.log('Supabase Environment Check:', {
  hasUrl: !!supabaseUrl,
  hasAnonKey: !!supabaseAnonKey,
  hasServiceKey: !!supabaseServiceKey
});

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Erforderliche öffentliche Supabase Umgebungsvariablen fehlen');
}

// Client für öffentliche Anfragen
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Client für Admin-Anfragen
export const adminSupabase = supabaseServiceKey 
  ? createClient(supabaseUrl, supabaseServiceKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false
      }
    })
  : null;
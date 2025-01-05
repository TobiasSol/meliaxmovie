// utils/supabase-client.js
import { createClient } from '@supabase/supabase-js';

// Hole die Umgebungsvariablen
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

// Überprüfe ob die notwendigen Variablen vorhanden sind
if (!supabaseUrl || !supabaseAnonKey || !supabaseServiceKey) {
  console.error('Fehlende Supabase Umgebungsvariablen:', {
    url: !!supabaseUrl,
    anonKey: !!supabaseAnonKey,
    serviceKey: !!supabaseServiceKey
  });
  throw new Error('Erforderliche Supabase Umgebungsvariablen fehlen');
}

// Client für öffentliche Anfragen
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Client für Admin-Anfragen
export const adminSupabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});
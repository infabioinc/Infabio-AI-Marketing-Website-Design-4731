import { createClient } from '@supabase/supabase-js'

// These will be replaced with actual values when you connect your Supabase project
const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL || 'https://your-project.supabase.co'
const SUPABASE_ANON_KEY = process.env.REACT_APP_SUPABASE_ANON_KEY || 'your-anon-key'

// Check if Supabase is properly configured
const isSupabaseConfigured = SUPABASE_URL !== 'https://your-project.supabase.co' && SUPABASE_ANON_KEY !== 'your-anon-key'

let supabase = null

if (isSupabaseConfigured) {
  supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    auth: {
      persistSession: true,
      autoRefreshToken: true
    }
  })
  console.log('✅ Supabase initialized successfully')
} else {
  console.warn('⚠️ Supabase not configured - using fallback data')
}

export { supabase, isSupabaseConfigured }
export default supabase
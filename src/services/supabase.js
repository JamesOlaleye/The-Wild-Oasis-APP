import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://zuvgplyzibypauqdhpqx.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp1dmdwbHl6aWJ5cGF1cWRocHF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU0NDU5NzksImV4cCI6MjAzMTAyMTk3OX0.uRQM0u8vEjXxsDzmWnnoc64LpixtM3BE5J-N7CGPeaQ';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

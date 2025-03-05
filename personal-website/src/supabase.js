import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ytavvwulvfmannweskpj.supabase.co'; 
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl0YXZ2d3VsdmZtYW5ud2Vza3BqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDExODM5MzksImV4cCI6MjA1Njc1OTkzOX0.x071es4bFeLezd1xmhBH38drBcQzWpsnjirDD9HvtTI';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
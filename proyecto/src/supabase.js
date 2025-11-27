// src/supabase.js
import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://tpluvjhdmopuedxjgjyu.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRwbHV2amhkbW9wdWVkeGpnanl1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI1NTM3NTcsImV4cCI6MjA3ODEyOTc1N30.4weNJb2-t-rWCb5h7BtpMtb-pSJpHiPiYvxKLVGxIy8';
export const supabase = createClient(supabaseUrl, supabaseKey);

import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kprthycifssoditavpyl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtwcnRoeWNpZnNzb2RpdGF2cHlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM0MjA1ODgsImV4cCI6MjAyODk5NjU4OH0._50QuQWXvCIwo9qVwkSbidH0v304KA9m88tt2GYSzhI";

export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);

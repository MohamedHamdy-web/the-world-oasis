import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://zvoiuuxmpejwygygwmuo.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp2b2l1dXhtcGVqd3lneWd3bXVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk4NDg5OTksImV4cCI6MjA4NTQyNDk5OX0.3g00bwt4QpS2xYYsVuC7-7Dr9DIfezYl139iGvmvVhQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

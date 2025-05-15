import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nxuiksdmqjjsyogwrwrp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im54dWlrc2RtcWpqc3lvZ3dyd3JwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDczMjM4MTUsImV4cCI6MjA2Mjg5OTgxNX0.6HMH7jfvro1MGqDGv_I-cuvVH480jBqmCsjx1yChCm8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

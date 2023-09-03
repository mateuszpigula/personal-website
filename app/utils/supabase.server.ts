import { createClient } from "@supabase/supabase-js";
import type { Database } from "database.types";

export const supabase = createClient<Database>(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_PUBLIC_KEY!,
  {
    auth: {
      persistSession: false,
    },
  }
);

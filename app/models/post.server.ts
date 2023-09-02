import type { Database } from "database.types";
import { supabase } from "~/utils/supabase.server";

type Post = Database["public"]["Tables"]["Posts"]["Row"];

export async function getPosts(): Promise<Array<Post>> {
  const { data, error } = await supabase
    .from("Posts")
    .select("*")
    .eq("is_published", true);

  if (error) throw new Error(error.message);

  return data || [];
}

import type { Database } from "database.types";
import { supabase } from "~/utils/supabase.server";

type Post = Database["public"]["Tables"]["Posts"]["Row"];

export async function getPosts(): Promise<Array<Post>> {
  const { data, error } = await supabase.from("Posts").select("*");
  // .eq("is_published", true);

  if (error) throw new Error(error.message);

  return data || [];
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const { data, error } = await supabase
    .from("Posts")
    .select("*")
    .eq("slug", slug)
    // .eq("is_published", true)
    .maybeSingle();

  if (error) throw new Error(error.message);

  return data;
}

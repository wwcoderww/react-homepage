import supabase from "./supabase";

export async function readAllBookmarks() {
  const { data: bookmarks, error } = await supabase
    .from("bookmarks")
    .select("*");
  if (error) throw new Error(`Unable to retrive all bookmarks`);
  return bookmarks;
}

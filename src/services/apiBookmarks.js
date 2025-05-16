import supabase from "./supabase";

export async function readAllBookmarks() {
  const { data: bookmarks, error } = await supabase
    .from("bookmarks")
    .select("*");
  if (error) throw new Error(`Unable to retrive all bookmarks`);
  return bookmarks;
}

export async function postBookmark(obj) {
  const { data, error } = await supabase
    .from("bookmarks")
    .insert([obj])
    .select();
  if (error) throw new Error(`Unable to add bookmark`);
  return data;
}

export async function delBookmark(id) {
  const { error } = await supabase.from("bookmarks").delete().eq("id", id);
  if (error) alert(`Unable to add bookmark`);
}

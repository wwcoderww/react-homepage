import { useQuery } from "@tanstack/react-query";
import { readAllBookmarks } from "../../services/apiBookmarks";

export default function () {
  const { data } = useQuery({
    queryKey: ["bookmarks"],
    queryFn: readAllBookmarks,
  });
  return data;
}

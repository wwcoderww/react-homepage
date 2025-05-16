import { useMutation, useQueryClient } from "@tanstack/react-query";
import { delBookmark } from "../../services/apiBookmarks";

export default function () {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: delBookmark,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["bookmarks"] }),
  });
  return mutate;
}

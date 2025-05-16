import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postBookmark } from "../../services/apiBookmarks";

export default function () {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: postBookmark,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["bookmarks"] }),
  });
  return mutate;
}

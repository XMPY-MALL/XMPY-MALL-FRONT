import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postReviewAPI } from "../../../apis/endpoints/review";

export const useWriteReview = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postReviewAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getReviewableItems"] });
    },
  });
};
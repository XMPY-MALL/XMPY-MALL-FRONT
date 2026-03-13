import { useQuery } from "@tanstack/react-query";
import { getReviewableItemsAPI } from "../../../apis/endpoints/review";

export const useReviewItems = () => {
  return useQuery({
    queryKey: ["getReviewableItems"],
    queryFn: getReviewableItemsAPI,
  });
};
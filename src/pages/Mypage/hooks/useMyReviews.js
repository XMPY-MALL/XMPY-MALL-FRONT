import { useQuery } from "@tanstack/react-query";
import { getMyReviewsAPI } from "../../../apis/endpoints/review";

export const useMyReviews = () => {
  return useQuery({
    queryKey: ["getMyReviews"],
    queryFn: getMyReviewsAPI,
  });
};
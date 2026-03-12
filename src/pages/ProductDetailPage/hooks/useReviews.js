import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getReviewsAPI } from "../../../apis/endpoints/review";

const PAGE_SIZE = 5;

export const useReviews = (productId) => {
  console.log("useReviews 호출됨", productId); // ← 추가
  const [offset, setOffset] = useState(0);
  const [accReviews, setAccReviews] = useState([]);
  const [showSpinner, setShowSpinner] = useState(false);

  const { data, isFetching } = useQuery({
    queryKey: ["reviews", productId, offset],
    queryFn: () => getReviewsAPI(productId, offset, PAGE_SIZE),
    placeholderData: (prev) => prev,
    enabled: !!productId,
  });

  useEffect(() => {
    if (data?.reviews) {
      setAccReviews((prev) =>
        offset === 0 ? data.reviews : [...prev, ...data.reviews],
      );
    }
  }, [data]);

  const total = data?.total ?? 0;
  const hasMore = accReviews.length < total;

  const loadMore = () => {
    if (!isFetching && hasMore) setOffset((prev) => prev + PAGE_SIZE);
  };

  return {
    reviews: accReviews,
    total,
    hasMore,
    isFetching: showSpinner,
    loadMore,
  };
};

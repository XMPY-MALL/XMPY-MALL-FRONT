// hooks/useReviews.js
import { useState } from "react";

const PAGE_SIZE = 5;

const MOCK_REVIEWS = [
  {
    reviewId: 1,
    userName: "김**",
    content: "너무 좋아요!",
    createdAt: "2024-03-01",
  },
  {
    reviewId: 2,
    userName: "이**",
    content: "배송도 빠르고 품질도 좋습니다.",
    createdAt: "2024-03-02",
  },
  {
    reviewId: 3,
    userName: "박**",
    content: "색상이 사진이랑 똑같아요.",
    createdAt: "2024-03-03",
  },
  {
    reviewId: 4,
    userName: "최**",
    content: "재구매 의사 있습니다.",
    createdAt: "2024-03-04",
  },
  {
    reviewId: 5,
    userName: "정**",
    content: "사이즈가 생각보다 크네요.",
    createdAt: "2024-03-05",
  },
  {
    reviewId: 6,
    userName: "강**",
    content: "가성비 최고입니다.",
    createdAt: "2024-03-06",
  },
  {
    reviewId: 7,
    userName: "조**",
    content: "선물용으로 샀는데 만족해요.",
    createdAt: "2024-03-07",
  },
];

export const useReviews = (productId) => {
  const [offset, setOffset] = useState(PAGE_SIZE);

  const visibleReviews = MOCK_REVIEWS.slice(0, offset);
  const hasMore = offset < MOCK_REVIEWS.length;

  const loadMore = () => {
    setOffset((prev) => prev + PAGE_SIZE);
  };

  return { visibleReviews, hasMore, loadMore };
};

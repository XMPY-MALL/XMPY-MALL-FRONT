import instance from "../instance";

// 1. 리뷰작성할 수 있는 상품목록 가져오기
export const getReviewableItemsAPI = async () => {
  const res = await instance.get("/api/reviews/me/items");
  return res.data;
};

// 2. 리뷰를 등록하도록 하는 API
export const postReviewAPI = async ({ orderItemId, content }) => {
  const res = await instance.post("/api/reviews", { orderItemId, content });
  return res.data;
};

// 3. 내가 작성한 리뷰목록 조회하기
export const getMyReviewsAPI = async () => {
  const res = await instance.get("/api/reviews/me");
  return res.data;
};

// 4. 하나의 상품에 대한 리뷰목
export const getReviewsAPI = async (productId, offset, limit) => {
  const { data } = await instance.get("/reviews", {
    params: { productId, offset, limit },
  });
  return data;
};

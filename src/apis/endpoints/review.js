import instance from "../instance";

export const getReviewableItemsAPI = async () => {
  const res = await instance.get("/api/reviews/me/items");
  return res.data;
};

export const postReviewAPI = async ({ orderItemId, content }) => {
  const res = await instance.post("/api/reviews", { orderItemId, content });
  return res.data;
};

export const getMyReviewsAPI = async () => {
  const res = await instance.get("/api/reviews/me");
  return res.data;
};
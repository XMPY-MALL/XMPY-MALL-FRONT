import instance from "../instance";

export const getReviewsAPI = async (productId, offset, limit) => {
  const { data } = await instance.get("/reviews", {
    params: { productId, offset, limit },
  });
  return data;
};

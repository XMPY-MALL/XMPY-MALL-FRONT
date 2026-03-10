import instance from "../instance";

export const getStocksAPI = async (productId) => {
  const { data } = await instance.get("/stocks", {
    params: { productId },
  });
  return data;
};

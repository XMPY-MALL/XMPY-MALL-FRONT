import instance from "../instance";

export const addProductAPI = async (dto) => {
  const { data } = await instance.post("/product", dto);
  return data;
};

export const getSubMenuAPI = async (categoryDetailId, page) => {
  const { data } = await instance.get(`/product/detail/${categoryDetailId}`, {
    params: { page },
  });
  return data;
};

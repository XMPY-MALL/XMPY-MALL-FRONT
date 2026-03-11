import instance from "../instance";

export const addProductAPI = async (dto) => {
  const { data } = await instance.post("/product", dto);
  return data;
};

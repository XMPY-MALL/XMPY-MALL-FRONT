import instance from "../instance";

export const getCategoriesAPI = async () => {
  const response = await instance.get("/categories");
  return response.data;
};

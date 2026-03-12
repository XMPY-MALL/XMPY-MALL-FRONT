import instance from "../instance";

// 상품 전체 조회
export const getProductListAPI = async () => {
  const response = await instance.get("/product");
  return response.data;
};

// 특정 상품 재고 조회
export const getProductStocksAPI = async (productId) => {
  const response = await instance.get(`/admin/products/${productId}/stocks`);
  return response.data;
};

// 사이즈 목록 조회
export const getSizesAPI = async () => {
  const response = await instance.get("/sizes");
  return response.data;
};

// 색상 목록 조회
export const getColorsAPI = async () => {
  const response = await instance.get("/colors");
  return response.data;
};

// 옵션 추가
export const addProductStockAPI = async (productId, dto) => {
  const response = await instance.post(`/admin/products/${productId}/stocks`, dto);
  return response.data;
};

// 재고 수정
export const updateProductStockAPI = async (stockId, dto) => {
  const response = await instance.put(`/admin/stocks/${stockId}`, dto);
  return response.data;
};

// 옵션 삭제
export const deleteProductStockAPI = async (stockId) => {
  const response = await instance.delete(`/admin/stocks/${stockId}`);
  return response.data;
};

export const getStocksAPI = async (productId) => {
  const { data } = await instance.get("/stocks", {
    params: { productId },
  });
  return data;
};

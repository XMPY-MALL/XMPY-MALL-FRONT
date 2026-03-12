import instance from "../instance";

export const getAdminOrdersApi = async () => {
  const { data } = await instance.get("/admin/mypage/orders");
  return data;
};

export const updateAdminOrderStatusApi = async ({ ordersId, status }) => {
  const { data } = await instance.patch(`/admin/mypage/orders/${ordersId}/status`, {
    status,
  });
  return data;
};

export const getAdminReviewsApi = async () => {
  const { data } = await instance.get("/admin/mypage/reviews");
  return data;
};

export const updateAdminReviewReplyApi = async ({ reviewId, adminReply }) => {
  const { data } = await instance.patch(`/admin/mypage/reviews/${reviewId}/reply`, {
    adminReply,
  });
  return data;
};
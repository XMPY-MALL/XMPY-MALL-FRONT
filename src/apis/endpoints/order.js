import instance from "../instance";

export const getOrderListAPI = async () => {
    const res = await instance.get("/api/orders/me");
    // orders(주문내역)의 데이터들을 다 들고 온다
    return res.data;
};

export const createOrderAPI = async (reqDto) => {
    const res = await instance.post("/api/orders", reqDto);
    return res.data;
};

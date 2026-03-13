import { useOrderList } from "../../../hooks/useOrderList";

export default function OrderList() {
  const { data: orders, isLoading } = useOrderList();

  if (isLoading) return <div>로딩중...</div>;
  if (!orders || orders.length === 0) return <div>주문 내역이 없습니다.</div>;

  return (
    <div>
      {orders.map((order) => (
        <div key={order.ordersId} style={{ border: "1px solid #ddd", marginBottom: 16, padding: 16, borderRadius: 8 }}>
          
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <span>주문번호 #{order.ordersId}</span>
            <span>{order.status}</span>
          </div>

          <div style={{ fontSize: 13, color: "#888", marginBottom: 8 }}>
            <span>주문일: {order.createdAt}</span>
            &nbsp;|&nbsp;
            <span>예상배송일: {order.estimatedDelivery}</span>
          </div>
          
          <div style={{ fontSize: 13, marginBottom: 12 }}>배송지: {order.address}</div>

          {order.orderItems.map((item) => (
            <div key={item.orderItemId} style={{ display: "flex", gap: 12, marginBottom: 8 }}>
              <img src={item.imgUrl} alt={item.productName} style={{ width: 80, height: 80, objectFit: "cover", borderRadius: 4 }} />
              <div>
                <p style={{ margin: 0, fontWeight: "bold" }}>{item.productName}</p>
                <p style={{ margin: 0, fontSize: 13 }}>사이즈: {item.sizeName} / 색상: {item.colorName}</p>
                <p style={{ margin: 0, fontSize: 13 }}>{item.price.toLocaleString()}원 × {item.quantity}개</p>
              </div>
            </div>
          ))}

          <div style={{ textAlign: "right", fontWeight: "bold", marginTop: 8 }}>
            총 결제금액: {order.totalPrice.toLocaleString()}원
          </div>
        </div>
      ))}
    </div>
  );
}


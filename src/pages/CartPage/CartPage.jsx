/** @jsxImportSource @emotion/react */
import { useCart } from "../../hooks/useCart";
import * as s from "./styles";
import { FiTrash2 } from "react-icons/fi";

function CartRow({ item, onQuantity, onRemove }) {
  return (
    <li css={s.item}>
      <div css={s.productInfo}>
        <img src={item.imageUrl} alt={item.productName} css={s.thumbnail} />
        <div css={s.productText}>
          <p css={s.productName}>{item.productName}</p>
          <p css={s.option}>
            {item.color.label} / {item.size.label}
          </p>
        </div>
      </div>

      <div css={s.quantityControl}>
        <button css={s.quantityBtn} onClick={() => onQuantity(item, -1)}>
          −
        </button>
        <span css={s.quantityValue}>{item.quantity}</span>
        <button css={s.quantityBtn} onClick={() => onQuantity(item, 1)}>
          +
        </button>
      </div>

      <span css={s.price}>
        {(item.price * item.quantity).toLocaleString()}원
      </span>

      <button css={s.deleteBtn} onClick={() => onRemove(item)}>
        <FiTrash2 size={18} />
      </button>
    </li>
  );
}

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <div css={s.container}>
      <h1 css={s.title}>장바구니</h1>

      <div css={s.tableHeader}>
        <span>상품 정보</span>
        <span>수량</span>
        <span>가격</span>
        <span>삭제</span>
      </div>

      <ul css={s.list}>
        {cartItems.map((item) => (
          <CartRow
            key={`${item.productId}-${item.color.id}-${item.size.id}`}
            item={item}
            onQuantity={updateQuantity}
            onRemove={removeFromCart}
          />
        ))}
      </ul>

      <div css={s.summary}>
        <div css={s.summaryRow}>
          <span>총 수량</span>
          <span>{totalQuantity}개</span>
        </div>
        <div css={s.summaryRow}>
          <span>배송비</span>
          <span>0원</span>
        </div>
        <div css={s.summaryTotal}>
          <span>합계</span>
          <span>{totalPrice.toLocaleString()}원</span>
        </div>
      </div>

      <div css={s.orderButtonWrapper}>
        <button css={s.orderButton}>주문하기</button>
      </div>
    </div>
  );
}

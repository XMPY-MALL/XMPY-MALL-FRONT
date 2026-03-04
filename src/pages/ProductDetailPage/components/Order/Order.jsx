/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { useOrder } from "../../hooks/useOrder";
import * as s from "./styles";

export default function Order({ productName, price, id, best }) {
  const { colors, sizes } = useOrder(id);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const totalPrice = price * quantity;

  const handleQuantity = (delta) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  return (
    <div css={s.container}>
      {best && <span css={s.badge}>BEST</span>}
      <h1 css={s.productName}>{productName}</h1>
      <p css={s.price}>{price.toLocaleString()}원</p>

      <div css={s.divider} />

      <div css={s.optionSection}>
        <p css={s.optionLabel}>컬러</p>
        <div css={s.optionGroup}>
          {colors.map(({ label, value, soldOut }) => (
            <button
              key={value}
              css={s.optionButton(selectedColor === value, soldOut)}
              onClick={() => !soldOut && setSelectedColor(value)}
              disabled={soldOut}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div css={s.optionSection}>
        <p css={s.optionLabel}>사이즈</p>
        <div css={s.optionGroup}>
          {sizes.map(({ label, value, soldOut }) => (
            <button
              key={value}
              css={s.optionButton(selectedSize === value, soldOut)}
              onClick={() => !soldOut && setSelectedSize(value)}
              disabled={soldOut}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div css={s.optionSection}>
        <p css={s.optionLabel}>수량</p>
        <div css={s.quantityControl}>
          <button css={s.quantityBtn} onClick={() => handleQuantity(-1)}>
            −
          </button>
          <span css={s.quantityValue}>{quantity}</span>
          <button css={s.quantityBtn} onClick={() => handleQuantity(1)}>
            +
          </button>
        </div>
      </div>

      <div css={s.divider} />

      <div css={s.totalRow}>
        <span css={s.totalLabel}>총 금액</span>
        <span css={s.totalPrice}>{totalPrice.toLocaleString()}원</span>
      </div>

      <button css={s.cartButton}>장바구니</button>
    </div>
  );
}

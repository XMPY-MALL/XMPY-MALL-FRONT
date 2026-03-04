/** @jsxImportSource @emotion/react */
import { useOrder } from "../../hooks/useOrder";
import { useCart } from "../../../../hooks/useCart";
import { useForm } from "../../../../hooks/useForm";
import * as s from "./styles";
import { toast } from "react-toastify";

export default function Order({ productName, price, id, best, imageUrls }) {
  const { colors, sizes } = useOrder(id);
  const { addToCart } = useCart();
  const { formVal, setFormVal } = useForm({
    colorId: null,
    sizeId: null,
    quantity: 1,
  });

  const totalPrice = price * formVal.quantity;

  const handleColorSelect = (colorId) => {
    setFormVal((prev) => ({ ...prev, colorId }));
  };

  const handleSizeSelect = (sizeId) => {
    setFormVal((prev) => ({ ...prev, sizeId }));
  };

  const handleQuantity = (delta) => {
    setFormVal((prev) => ({
      ...prev,
      quantity: Math.max(1, prev.quantity + delta),
    }));
  };

  const handleAddToCart = () => {
    if (!formVal.colorId || !formVal.sizeId) {
      toast.error("사이즈와 컬러를 먼저 선택해주세요");
      return;
    }

    addToCart({
      productId: id,
      color: colors.find((c) => c.id === formVal.colorId),
      size: sizes.find((s) => s.id === formVal.sizeId),
      quantity: formVal.quantity,
      productName,
      price,
      imageUrl: imageUrls[0],
    });

    toast.success("장바구니에 담기 성공");
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
          {colors.map(({ id, label, soldOut }) => (
            <button
              key={id}
              css={s.optionButton(formVal.colorId === id, soldOut)}
              onClick={() => !soldOut && handleColorSelect(id)}
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
          {sizes.map(({ id, label, soldOut }) => (
            <button
              key={id}
              css={s.optionButton(formVal.sizeId === id, soldOut)}
              onClick={() => !soldOut && handleSizeSelect(id)}
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
          <span css={s.quantityValue}>{formVal.quantity}</span>
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

      <button css={s.cartButton} onClick={handleAddToCart}>
        장바구니
      </button>
    </div>
  );
}

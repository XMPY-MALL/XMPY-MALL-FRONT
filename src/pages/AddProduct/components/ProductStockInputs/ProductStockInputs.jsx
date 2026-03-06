// ProductStockInputs.jsx
/** @jsxImportSource @emotion/react */
import * as s from "./styles";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function ProductStockInputs({
  stocks,
  onAddStock,
  onRemoveStock,
  onUpdateStock,
}) {
  return (
    <div css={s.containerStyle}>
      <label css={s.labelStyle}>재고 입력</label>

      <div css={s.stockListStyle}>
        <div css={s.headerRowStyle}>
          <span>사이즈</span>
          <span>컬러</span>
          <span>재고</span>
          <span />
        </div>

        {stocks.map((stock, index) => (
          <div key={index} css={s.stockRowStyle}>
            <input
              css={s.inputStyle}
              type="text"
              placeholder="S / M / L / XL"
              value={stock.size}
              onChange={(e) => onUpdateStock(index, "size", e.target.value)}
            />
            <input
              css={s.inputStyle}
              type="text"
              placeholder="화이트"
              value={stock.color}
              onChange={(e) => onUpdateStock(index, "color", e.target.value)}
            />
            <input
              css={s.inputStyle}
              type="number"
              placeholder="0"
              value={stock.quantity}
              onChange={(e) => onUpdateStock(index, "quantity", e.target.value)}
            />
            <button
              css={s.deleteButtonStyle}
              type="button"
              onClick={() => onRemoveStock(index)}
            >
              <RiDeleteBin6Line />
            </button>
          </div>
        ))}
      </div>

      <button css={s.addButtonStyle} type="button" onClick={onAddStock}>
        + 한줄 추가
      </button>
    </div>
  );
}

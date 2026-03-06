// ProductInfoInputs.jsx
/** @jsxImportSource @emotion/react */
import * as s from "./styles";

export default function ProductInfoInputs({ formVal, handleChange }) {
  return (
    <div css={s.containerStyle}>
      <div css={s.fieldStyle}>
        <label css={s.labelStyle}>상품 이름</label>
        <input
          css={s.inputStyle}
          type="text"
          name="productName"
          value={formVal.productName}
          onChange={handleChange}
        />
      </div>

      <div css={s.fieldStyle}>
        <label css={s.labelStyle}>간략 설명</label>
        <input
          css={s.inputStyle}
          type="text"
          name="description"
          value={formVal.description}
          onChange={handleChange}
        />
      </div>

      <div css={s.fieldStyle}>
        <label css={s.labelStyle}>금액</label>
        <div css={s.priceWrapperStyle}>
          <input
            css={s.inputStyle}
            type="number"
            name="price"
            value={formVal.price}
            onChange={handleChange}
          />
          <span css={s.unitStyle}>원</span>
        </div>
      </div>
    </div>
  );
}

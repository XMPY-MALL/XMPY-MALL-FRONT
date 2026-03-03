/** @jsxImportSource @emotion/react */
import * as s from "./styles";

export default function ProductCard({ product, onClick }) {
  const {
    categoryDetailName,
    productName,
    price,
    thumbnailUrl,
    soldOut,
    reviewCount,
  } = product;

  return (
    <div css={s.cardStyle} onClick={onClick}>
      <div css={s.imageWrapStyle}>
        <img src={thumbnailUrl} alt={productName} />
        {soldOut && (
          <div css={s.soldOutOverlayStyle}>
            <span css={s.soldOutTextStyle}>SOLD OUT</span>
          </div>
        )}
      </div>
      <div css={s.infoStyle}>
        <span css={s.categoryStyle}>{categoryDetailName}</span>
        <p css={s.nameStyle}>{productName}</p>
        <p css={s.priceStyle}>{price.toLocaleString()}원</p>
        <span css={s.reviewStyle}>리뷰 {reviewCount}</span>
      </div>
    </div>
  );
}

/** @jsxImportSource @emotion/react */
import * as s from "./styles";

export default function ProductDetail({ productDetailContent }) {
  return (
    <div
      css={s.container}
      dangerouslySetInnerHTML={{ __html: productDetailContent }}
    />
  );
}

/** @jsxImportSource @emotion/react */
import { useState } from "react";
import * as s from "./styles";

export default function Thumbnail({ imgUrls }) {
  const [mainImg, setMainImg] = useState(imgUrls[0]);

  return (
    <div css={s.container}>
      <img src={mainImg} alt="상품 메인 이미지" css={s.mainImg} />
      <div css={s.thumbList}>
        {imgUrls.map((url, i) => (
          <img
            key={i}
            src={url}
            alt={`상품 이미지 ${i + 1}`}
            css={s.thumbItem(mainImg === url)}
            onClick={() => setMainImg(url)}
          />
        ))}
      </div>
    </div>
  );
}

// ProductImagePlaceHolder.jsx
/** @jsxImportSource @emotion/react */
import { useRef } from "react";
import * as s from "./styles";

const MAX_COUNT = 3;

export default function ProductImagePlaceHolder({
  images,
  handleImageChange,
  handleDelete,
}) {
  const inputRef = useRef(null);

  const handleClick = () => {
    if (images.length < MAX_COUNT) inputRef.current.click();
  };

  return (
    <div css={s.containerStyle}>
      <h2 css={s.titleStyle}>
        상품 썸네일 (가장 첫번째 이미지가 대표썸네일이 됩니다)
      </h2>

      <input
        ref={inputRef}
        css={s.hiddenInputStyle}
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageChange}
      />

      <div css={s.previewListStyle}>
        {images.map((image, index) => (
          <div key={index} css={s.previewItemStyle}>
            <img
              css={s.previewImageStyle}
              src={image.previewUrl}
              alt={`상품 이미지 ${index + 1}`}
            />
            <button
              css={s.deleteButtonStyle}
              type="button"
              onClick={() => handleDelete(index)}
            >
              ×
            </button>
          </div>
        ))}

        {images.length < MAX_COUNT && (
          <div css={s.placeholderStyle} onClick={handleClick}>
            <span css={s.plusStyle}>+</span>
            <span css={s.placeholderTextStyle}>이미지 추가</span>
          </div>
        )}
      </div>

      <p css={s.countStyle}>{images.length}/3 장 등록됨</p>
    </div>
  );
}

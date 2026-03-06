// ProductCategories.jsx
/** @jsxImportSource @emotion/react */
import * as s from "./styles";

export default function ProductCategories({
  categories,
  selectedCategoryId,
  selectedSubCategoryId,
  subCategories,
  onCategorySelect,
  onSubCategorySelect,
}) {
  return (
    <div css={s.containerStyle}>
      <div css={s.sectionStyle}>
        <label css={s.labelStyle}>카테고리</label>
        <div css={s.buttonGroupStyle}>
          {categories.map((category) => (
            <button
              key={category.productCategoryId}
              type="button"
              css={s.categoryButtonStyle(
                selectedCategoryId === category.productCategoryId,
              )}
              onClick={() => onCategorySelect(category.productCategoryId)}
            >
              {category.productCategoryName}
            </button>
          ))}
        </div>
      </div>

      <div css={s.sectionStyle}>
        <label css={s.labelStyle}>세부 카테고리</label>
        <div css={s.buttonGroupStyle}>
          {subCategories.map((sub) => (
            <button
              key={sub.productCategoryDetailId}
              type="button"
              css={s.categoryButtonStyle(
                selectedSubCategoryId === sub.productCategoryDetailId,
              )}
              onClick={() => onSubCategorySelect(sub.productCategoryDetailId)}
            >
              {sub.productCategoryDetailName}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

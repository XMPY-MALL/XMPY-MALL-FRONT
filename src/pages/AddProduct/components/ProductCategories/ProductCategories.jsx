// ProductCategories.jsx
export default function ProductCategories({
  categories,
  selectedCategoryId,
  selectedSubCategoryId,
  subCategories,
  onCategorySelect,
  onSubCategorySelect,
}) {
  return (
    <div>
      <div>
        <label>카테고리</label>
        <div>
          {categories.map((category) => (
            <button
              key={category.productCategoryId}
              type="button"
              onClick={() => onCategorySelect(category.productCategoryId)}
              aria-pressed={selectedCategoryId === category.productCategoryId}
            >
              {category.productCategoryName}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label>세부 카테고리</label>
        <div>
          {subCategories.map((sub) => (
            <button
              key={sub.productCategoryDetailId}
              type="button"
              onClick={() => onSubCategorySelect(sub.productCategoryDetailId)}
              aria-pressed={
                selectedSubCategoryId === sub.productCategoryDetailId
              }
            >
              {sub.productCategoryDetailName}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

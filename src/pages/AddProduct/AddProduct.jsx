/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { useAddProduct } from "./hooks/useAddProduct";
import { useQuillEditor } from "../../quill/useQuillEditor";
import ProductImagePlaceHolder from "./components/ProductImagePlaceHolder/ProductImagePlaceHolder";
import ProductInfoInputs from "./components/ProductInfoInputs/ProductInfoInputs";
import ProductCategories from "./components/ProductCategories/ProductCategories";
import ProductStockInputs from "./components/ProductStockInputs/ProductStockInputs";
import ProductDetailInputs from "./components/ProductDetailInputs/ProductDetailInputs";
import * as s from "./styles";

export default function AddProduct() {
  const {
    formVal,
    handleChange,
    images,
    handleImageChange,
    handleDelete,
    categories,
    selectedCategoryId,
    selectedSubCategoryId,
    subCategories,
    handleCategorySelect,
    handleSubCategorySelect,
    stocks,
    addStock,
    removeStock,
    updateStock,
    handleSubmit,
  } = useAddProduct();

  const { quillRef, modules } = useQuillEditor();
  const [detailContent, setDetailContent] = useState("");

  return (
    <section css={s.containerStyle}>
      <h1 css={s.titleStyle}>상품 추가</h1>

      <div css={s.topGridStyle}>
        <div css={s.leftStyle}>
          <ProductImagePlaceHolder
            images={images}
            handleImageChange={handleImageChange}
            handleDelete={handleDelete}
          />
          <ProductInfoInputs formVal={formVal} handleChange={handleChange} />
        </div>
        <div css={s.rightStyle}>
          <ProductCategories
            categories={categories}
            selectedCategoryId={selectedCategoryId}
            selectedSubCategoryId={selectedSubCategoryId}
            subCategories={subCategories}
            onCategorySelect={handleCategorySelect}
            onSubCategorySelect={handleSubCategorySelect}
          />
          <ProductStockInputs
            stocks={stocks}
            onAddStock={addStock}
            onRemoveStock={removeStock}
            onUpdateStock={updateStock}
          />
        </div>
      </div>

      <ProductDetailInputs
        quillRef={quillRef}
        modules={modules}
        detailContent={detailContent}
        onChange={setDetailContent}
      />

      <button
        css={s.submitButtonStyle}
        type="button"
        onClick={() => handleSubmit(detailContent)}
      >
        등록
      </button>
    </section>
  );
}

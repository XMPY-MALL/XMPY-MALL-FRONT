// AddProduct.jsx
import { useAddProduct } from "./hooks/useAddProduct";
import ProductImagePlaceHolder from "./components/ProductImagePlaceHolder/ProductImagePlaceHolder";
import ProductInfoInputs from "./components/ProductInfoInputs/ProductInfoInputs";
import ProductCategories from "./components/ProductCategories/ProductCategories";
import ProductStockInputs from "./components/ProductStockInputs/ProductStockInputs";
import ProductDetailInputs from "./components/ProductDetailInputs/ProductDetailInputs";

export default function AddProduct() {
  const {
    formVal,
    handleChange,
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

  return (
    <section>
      <h1>상품 추가</h1>

      <div className="add-product-top-grid">
        <div className="add-product-left">
          <ProductImagePlaceHolder />
          <ProductInfoInputs formVal={formVal} handleChange={handleChange} />
        </div>
        <div className="add-product-right">
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

      <ProductDetailInputs />

      <button type="button" onClick={handleSubmit}>
        등록
      </button>
    </section>
  );
}

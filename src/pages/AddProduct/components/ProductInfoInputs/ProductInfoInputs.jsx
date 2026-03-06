// ProductInfoInputs.jsx
export default function ProductInfoInputs({ formVal, handleChange }) {
  return (
    <div>
      <div>
        <label>상품 이름</label>
        <input
          type="text"
          name="productName"
          value={formVal.productName}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>간략 설명</label>
        <input
          type="text"
          name="description"
          value={formVal.description}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>금액</label>
        <input
          type="number"
          name="price"
          value={formVal.price}
          onChange={handleChange}
        />
        <span>원</span>
      </div>
    </div>
  );
}

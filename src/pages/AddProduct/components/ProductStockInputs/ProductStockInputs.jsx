// ProductStockInputs.jsx
export default function ProductStockInputs({
  stocks,
  onAddStock,
  onRemoveStock,
  onUpdateStock,
}) {
  return (
    <div>
      <label>재고 입력</label>

      {stocks.map((stock, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="사이즈"
            value={stock.size}
            onChange={(e) => onUpdateStock(index, "size", e.target.value)}
          />
          <input
            type="text"
            placeholder="컬러"
            value={stock.color}
            onChange={(e) => onUpdateStock(index, "color", e.target.value)}
          />
          <input
            type="number"
            placeholder="재고"
            value={stock.quantity}
            onChange={(e) => onUpdateStock(index, "quantity", e.target.value)}
          />
          <button type="button" onClick={() => onRemoveStock(index)}>
            삭제
          </button>
        </div>
      ))}

      <button type="button" onClick={onAddStock}>
        + 한줄 추가
      </button>
    </div>
  );
}

/** @jsxImportSource @emotion/react */
import { useEffect, useMemo, useState } from "react";
import { IoAdd } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import * as s from "./styles";
import {
  addProductStockAPI,
  deleteProductStockAPI,
  getColorsAPI,
  getProductListAPI,
  getProductStocksAPI,
  getSizesAPI,
  updateProductStockAPI,
} from "../../apis/endpoints/stock";

const CATEGORY_TABS = [
  { key: "all", label: "전체" },
  { key: 2, label: "상의" },
  { key: 3, label: "하의" },
  { key: 1, label: "아우터" },
];

const CATEGORY_NAME_MAP = {
  1: "아우터",
  2: "상의",
  3: "하의",
};

export default function StockManagePage() {
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [productList, setProductList] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [stockList, setStockList] = useState([]);
  const [sizeOptions, setSizeOptions] = useState([]);
  const [colorOptions, setColorOptions] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [loadingStocks, setLoadingStocks] = useState(false);
  const [editingStockId, setEditingStockId] = useState(null);
  const [editingCount, setEditingCount] = useState(0);
  const [addingMode, setAddingMode] = useState(false);
  const [newOptionForm, setNewOptionForm] = useState({
    sizeId: "",
    colorId: "",
    count: 0,
  });

  const normalizedProductList = useMemo(() => {
    return productList.map((product) => ({
      ...product,
      categoryName: CATEGORY_NAME_MAP[product.categoryId] || "기타",
    }));
  }, [productList]);

  const filteredProducts = useMemo(() => {
    if (categoryFilter === "all") return normalizedProductList;
    return normalizedProductList.filter(
      (product) => Number(product.categoryId) === Number(categoryFilter)
    );
  }, [categoryFilter, normalizedProductList]);

  const selectedProduct =
    filteredProducts.find((product) => product.productId === selectedProductId) ||
    normalizedProductList.find((product) => product.productId === selectedProductId) ||
    null;

  const totalStock = useMemo(() => {
    return stockList.reduce((acc, stock) => acc + Number(stock.count || 0), 0);
  }, [stockList]);

  const soldOutCount = useMemo(() => {
    return stockList.filter((stock) => Number(stock.count) === 0).length;
  }, [stockList]);

  const loadProductList = async () => {
    try {
      setLoadingProducts(true);
      const data = await getProductListAPI();
      setProductList(Array.isArray(data) ? data : []);

      if (Array.isArray(data) && data.length > 0) {
        setSelectedProductId((prev) => prev ?? data[0].productId);
      }
    } catch (error) {
      console.error("상품 목록 조회 실패", error);
      setProductList([]);
    } finally {
      setLoadingProducts(false);
    }
  };
  const loadStockList = async (productId) => {
    if (!productId) return;

    try {
      setLoadingStocks(true);
      const data = await getProductStocksAPI(productId);
      setStockList(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("재고 목록 조회 실패", error);
      setStockList([]);
    } finally {
      setLoadingStocks(false);
    }
  };

  const loadOptionMeta = async () => {
    try {
      const [sizes, colors] = await Promise.all([getSizesAPI(), getColorsAPI()]);
      setSizeOptions(Array.isArray(sizes) ? sizes : []);
      setColorOptions(Array.isArray(colors) ? colors : []);
    } catch (error) {
      console.error("사이즈/색상 목록 조회 실패", error);
      setSizeOptions([]);
      setColorOptions([]);
    }
  };

  useEffect(() => {
    loadProductList();
    loadOptionMeta();
  }, []);

  useEffect(() => {
    if (selectedProductId) {
      loadStockList(selectedProductId);
    }
  }, [selectedProductId]);

  useEffect(() => {
    if (filteredProducts.length === 0) {
      setSelectedProductId(null);
      return;
    }

    const exists = filteredProducts.some(
      (product) => product.productId === selectedProductId
    );

    if (!exists) {
      setSelectedProductId(filteredProducts[0].productId);
    }
  }, [filteredProducts, selectedProductId]);

  const handleCategoryChange = (categoryKey) => {
    setCategoryFilter(categoryKey);
    setEditingStockId(null);
    setAddingMode(false);
  };

  const handleSelectProduct = (productId) => {
    setSelectedProductId(productId);
    setEditingStockId(null);
    setAddingMode(false);
  };

  const handleStartEdit = (stock) => {
    setAddingMode(false);
    setEditingStockId(stock.stockId);
    setEditingCount(stock.count);
  };

  const handleCancelEdit = () => {
    setEditingStockId(null);
    setEditingCount(0);
  };

  const handleSaveEdit = async (stockId) => {
    try {
      await updateProductStockAPI(stockId, {
        count: Number(editingCount),
      });
      setEditingStockId(null);
      await loadStockList(selectedProductId);
    } catch (error) {
      console.error("재고 수정 실패", error);
      alert(error?.response?.data?.message || "재고 수정에 실패했습니다.");
    }
  };

  const handleDeleteOption = async (stockId) => {
    const confirmDelete = window.confirm("이 옵션을 삭제하시겠습니까?");
    if (!confirmDelete) return;

    try {
      await deleteProductStockAPI(stockId);
      await loadStockList(selectedProductId);
    } catch (error) {
      console.error("옵션 삭제 실패", error);
      alert(error?.response?.data?.message || "옵션 삭제에 실패했습니다.");
    }
  };

  const handleStartAdd = () => {
    setEditingStockId(null);
    setAddingMode(true);
    setNewOptionForm({
      sizeId: "",
      colorId: "",
      count: 0,
    });
  };

  const handleChangeNewOptionForm = (key, value) => {
    setNewOptionForm((prev) => ({
      ...prev,
      [key]: key === "count" ? Number(value) : value,
    }));
  };

  const handleAddOption = async () => {
    if (!selectedProductId) return;

    if (!newOptionForm.sizeId || !newOptionForm.colorId) {
      alert("사이즈와 색상을 선택해주세요.");
      return;
    }

    try {
      await addProductStockAPI(selectedProductId, {
        sizeId: Number(newOptionForm.sizeId),
        colorId: Number(newOptionForm.colorId),
        count: Number(newOptionForm.count),
      });

      setAddingMode(false);
      setNewOptionForm({
        sizeId: "",
        colorId: "",
        count: 0,
      });

      await loadStockList(selectedProductId);
    } catch (error) {
      console.error("옵션 추가 실패", error);
      alert(error?.response?.data?.message || "옵션 추가에 실패했습니다.");
    }
  };

  return (
    <section css={s.containerStyle}>
      <div css={s.pageTitleSectionStyle}>
        <h1 css={s.pageTitleStyle}>상품 / 재고 관리</h1>
        <p css={s.pageDescStyle}>상품별 옵션(색상 / 사이즈) 재고 관리</p>
      </div>

      <div css={s.contentLayoutStyle}>
        <aside css={s.sidePanelStyle}>
          <div css={s.categoryTabWrapperStyle}>
            {CATEGORY_TABS.map((tab) => (
              <button
                key={tab.key}
                type="button"
                css={s.categoryTabStyle(categoryFilter === tab.key)}
                onClick={() => handleCategoryChange(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div css={s.productListStyle}>
            {loadingProducts ? (
              <div css={s.emptyBoxStyle}>상품 목록 불러오는 중...</div>
            ) : filteredProducts.length === 0 ? (
              <div css={s.emptyBoxStyle}>상품이 없습니다.</div>
            ) : (
              filteredProducts.map((product) => (
                <button
                  key={product.productId}
                  type="button"
                  css={s.productCardStyle(
                    selectedProduct?.productId === product.productId
                  )}
                  onClick={() => handleSelectProduct(product.productId)}
                >
                  <div css={s.productThumbStyle}>
                    {product.imgUrl ? (
                      <img
                        src={product.imgUrl}
                        alt={product.productName}
                        css={s.productImageStyle}
                      />
                    ) : (
                      "상품"
                    )}
                  </div>

                  <div css={s.productMetaStyle}>
                    <p css={s.productNameStyle}>{product.productName}</p>
                    <p css={s.productInfoStyle}>
                      {product.categoryName} / {Number(product.price).toLocaleString()}원
                    </p>
                  </div>
                </button>
              ))
            )}
          </div>
        </aside>

        <div css={s.mainPanelStyle}>
          <div css={s.topActionStyle}>
            <button type="button" css={s.addOptionButtonStyle} onClick={handleStartAdd}>
              <IoAdd />
              옵션 추가
            </button>
          </div>

          {selectedProduct ? (
            <>
              <div css={s.productHeaderStyle}>
                <h2 css={s.selectedProductNameStyle}>{selectedProduct.productName}</h2>
                <p css={s.selectedProductInfoStyle}>
                  {selectedProduct.categoryName} / {Number(selectedProduct.price).toLocaleString()}원
                </p>
              </div>

              <div css={s.summaryBoxGroupStyle}>
                <div css={s.summaryBoxStyle}>
                  <span css={s.summaryLabelStyle}>총 재고</span>
                  <strong css={s.summaryValueStyle}>{totalStock}</strong>
                </div>
                <div css={s.summaryBoxStyle}>
                  <span css={s.summaryLabelStyle}>품절</span>
                  <strong css={s.summaryValueStyle}>{soldOutCount}</strong>
                </div>
              </div>

              <div css={s.tableWrapperStyle}>
                <div css={s.tableHeaderStyle}>
                  <span>색상</span>
                  <span>사이즈</span>
                  <span>재고 수량</span>
                  <span>상태</span>
                  <span />
                </div>

                <div css={s.tableBodyStyle}>
                  {addingMode && (
                    <div css={s.tableRowStyle}>
                      <select
                        css={s.editSelectStyle}
                        value={newOptionForm.colorId}
                        onChange={(e) =>
                          handleChangeNewOptionForm("colorId", e.target.value)
                        }
                      >
                        <option value="">색상 선택</option>
                        {colorOptions.map((color) => (
                          <option key={color.color_id} value={color.color_id}>
                            {color.color_name}
                          </option>
                        ))}
                      </select>

                      <select
                        css={s.editSelectStyle}
                        value={newOptionForm.sizeId}
                        onChange={(e) =>
                          handleChangeNewOptionForm("sizeId", e.target.value)
                        }
                      >
                        <option value="">사이즈 선택</option>
                        {sizeOptions.map((size) => (
                          <option key={size.size_id} value={size.size_id}>
                            {size.size_name}
                          </option>
                        ))}
                      </select>

                      <input
                        css={s.editInputStyle}
                        type="number"
                        min="0"
                        value={newOptionForm.count}
                        onChange={(e) =>
                          handleChangeNewOptionForm("count", e.target.value)
                        }
                      />

                      <span css={s.statusTextStyle(Number(newOptionForm.count) === 0)}>
                        {Number(newOptionForm.count) === 0 ? "품절" : "정상"}
                      </span>

                      <div css={s.actionButtonsStyle}>
                        <button type="button" css={s.lineButtonStyle} onClick={handleAddOption}>
                          저장
                        </button>
                        <button type="button" css={s.lineButtonStyle} onClick={() => setAddingMode(false)}>
                          취소
                        </button>
                      </div>
                    </div>
                  )}

                  {loadingStocks ? (
                    <div css={s.emptyBoxStyle}>재고 목록 불러오는 중...</div>
                  ) : stockList.length === 0 ? (
                    <div css={s.emptyBoxStyle}>등록된 옵션이 없습니다.</div>
                  ) : (
                    stockList.map((stock) => {
                      const isSoldOut = Number(stock.count) === 0;

                      return (
                        <div key={stock.stockId} css={s.tableRowStyle}>
                          <span css={s.tableTextStyle}>{stock.colorName}</span>
                          <span css={s.tableTextStyle}>{stock.sizeName}</span>

                          {editingStockId === stock.stockId ? (
                            <input
                              css={s.editInputStyle}
                              type="number"
                              min="0"
                              value={editingCount}
                              onChange={(e) => setEditingCount(Number(e.target.value))}
                            />
                          ) : (
                            <span css={s.tableTextStyle}>{stock.count}</span>
                          )}

                          <span
                            css={s.statusTextStyle(
                              editingStockId === stock.stockId
                                ? Number(editingCount) === 0
                                : isSoldOut
                            )}
                          >
                            {editingStockId === stock.stockId
                              ? Number(editingCount) === 0
                                ? "품절"
                                : "정상"
                              : isSoldOut
                              ? "품절"
                              : "정상"}
                          </span>

                          <div css={s.actionButtonsStyle}>
                            {editingStockId === stock.stockId ? (
                              <>
                                <button type="button" css={s.lineButtonStyle} onClick={() => handleSaveEdit(stock.stockId)}>
                                  저장
                                </button>
                                <button type="button" css={s.lineButtonStyle} onClick={handleCancelEdit}>
                                  취소
                                </button>
                              </>
                            ) : (
                              <>
                                <button type="button" css={s.lineButtonStyle} onClick={() => handleStartEdit(stock)}>
                                  수정
                                </button>
                                <button
                                  type="button"
                                  css={s.iconDeleteButtonStyle}
                                  onClick={() => handleDeleteOption(stock.stockId)}
                                >
                                  <RiDeleteBin6Line />
                                </button>
                              </>
                            )}
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            </>
          ) : (
            <div css={s.emptyBoxStyle}>상품을 선택해주세요.</div>
          )}
        </div>
      </div>
    </section>
  );
}
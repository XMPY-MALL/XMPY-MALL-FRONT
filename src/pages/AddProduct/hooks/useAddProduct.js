import { useForm } from "../../../hooks/useForm";
import { useCategories } from "../../../constants/useCategories";
import { useState } from "react";

export const useAddProduct = () => {
  const categories = useCategories();

  // 기본 정보
  const { formVal, handleChange } = useForm({
    productName: "",
    description: "",
    price: "",
  });

  // 카테고리
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [selectedSubCategoryId, setSelectedSubCategoryId] = useState(null);

  const subCategories =
    categories.find((c) => c.productCategoryId === selectedCategoryId)
      ?.subMenu ?? [];

  const handleCategorySelect = (categoryId) => {
    setSelectedCategoryId(categoryId);
    setSelectedSubCategoryId(null);
  };

  const handleSubCategorySelect = (subCategoryId) => {
    setSelectedSubCategoryId(subCategoryId);
  };

  // 재고
  const [stocks, setStocks] = useState([{ size: "", color: "", quantity: 0 }]);

  const addStock = () =>
    setStocks((prev) => [...prev, { size: "", color: "", quantity: 0 }]);

  const removeStock = (index) =>
    setStocks((prev) => prev.filter((_, i) => i !== index));

  const updateStock = (index, field, value) =>
    setStocks((prev) =>
      prev.map((s, i) => (i === index ? { ...s, [field]: value } : s)),
    );

  // 제출
  const handleSubmit = () => {
    const dto = {
      ...formVal,
      selectedCategoryId,
      selectedSubCategoryId,
      stocks,
    };
    alert(JSON.stringify(dto, null, 2));
  };

  return {
    // 기본 정보
    formVal,
    handleChange,
    // 카테고리
    categories,
    selectedCategoryId,
    selectedSubCategoryId,
    subCategories,
    handleCategorySelect,
    handleSubCategorySelect,
    // 재고
    stocks,
    addStock,
    removeStock,
    updateStock,
    // 제출
    handleSubmit,
  };
};

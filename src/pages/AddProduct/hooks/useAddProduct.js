import { useForm } from "../../../hooks/useForm";
import { useCategories } from "../../../hooks/useCategories";
import { useProductImages } from "./useProductImage";
import { useUploadImages } from "./useUploadImages";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { addProductAPI } from "../../../apis/endpoints/product";
import { toast } from "react-toastify";

export const useAddProduct = () => {
  const categories = useCategories();

  // 기본 정보
  const { formVal, handleChange } = useForm({
    productName: "",
    description: "",
    price: "",
  });

  // 이미지
  const {
    images,
    handleChange: handleImageChange,
    handleDelete,
  } = useProductImages();
  const { uploadImages } = useUploadImages();

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

  const { mutate: addProduct, isPending } = useMutation({
    mutationFn: addProductAPI,
    onSuccess: () => {
      toast.success("상품 등록 완료");
    },
    onError: () => {
      toast.error("상품 등록 실패");
    },
  });

  const handleSubmit = async (detailContent) => {
    const imageUrls = await uploadImages(images);
    const dto = {
      ...formVal,
      imageUrls,
      selectedCategoryId,
      selectedSubCategoryId,
      stocks,
      detailContent,
    };
    addProduct(dto);
  };

  return {
    // 기본 정보
    formVal,
    handleChange,
    // 이미지
    images,
    handleImageChange,
    handleDelete,
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
    isPending,
    handleSubmit,
  };
};

/** @jsxImportSource @emotion/react */
import Thumbnail from "./components/Thumbnail/Thumbnail";
import Order from "./components/Order/Order";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Reviews from "./components/Reviews/Reviews";
import { useParams } from "react-router-dom";
import { useProduct } from "./hooks/useProductDetail";
import { useState } from "react";
import * as s from "./styles";

export default function ProductDetailPage() {
  const { productId } = useParams();
  const { best, imgUrls, price, productDetailContent, productName } =
    useProduct(productId);
  const [activeTab, setActiveTab] = useState("detail");

  return (
    <div css={s.container}>
      <div css={s.topSection}>
        <Thumbnail imgUrls={imgUrls} />
        <Order
          productName={productName}
          price={price}
          id={productId}
          best={best}
          imgUrls={imgUrls}
        />
      </div>
      <div css={s.tabBar}>
        <button
          css={s.tabButton(activeTab === "detail")}
          onClick={() => setActiveTab("detail")}
          aria-selected={activeTab === "detail"}
        >
          상세정보
        </button>
        <button
          css={s.tabButton(activeTab === "reviews")}
          onClick={() => setActiveTab("reviews")}
          aria-selected={activeTab === "reviews"}
        >
          상품 후기
        </button>
      </div>
      {activeTab === "detail" ? (
        <ProductDetail productDetailContent={productDetailContent} />
      ) : (
        <Reviews id={productId} />
      )}
    </div>
  );
}

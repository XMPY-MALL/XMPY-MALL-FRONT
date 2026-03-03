import React from "react";
import Thumbnail from "./components/Thumbnail/Thumbnail";
import Order from "./components/Order/Order";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Reviews from "./components/Reviews/Reviews";
import { useParams } from "react-router-dom";

export default function ProductDetailPage() {
  const id = useParams("productId");
  return (
    <>
      <div>
        <Thumbnail />
        <Order />
      </div>
      <ProductDetail />
      <Reviews />
    </>
  );
}

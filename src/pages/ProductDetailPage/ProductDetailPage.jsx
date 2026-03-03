import Thumbnail from "./components/Thumbnail/Thumbnail";
import Order from "./components/Order/Order";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Reviews from "./components/Reviews/Reviews";
import { useParams } from "react-router-dom";
import { useProduct } from "./hooks/useProductDetail";

export default function ProductDetailPage() {
  const id = useParams("productId");
  const { best, imgUrls, price, productDetailContent, productName } =
    useProduct(id);

  return (
    <>
      <div>
        <Thumbnail imgUrls={imgUrls} />
        <Order productName={productName} price={price} id={id} best={best} />
      </div>
      <ProductDetail productDetailContent={productDetailContent} />
      <Reviews id={id} />
    </>
  );
}

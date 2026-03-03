/** @jsxImportSource @emotion/react */
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { useSubMenu } from "./hooks/useSubMenu";
import Pagination from "./components/Pagenation/Pagination";
import ProductCard from "./components/ProductCard/ProductCard";
import * as s from "./styles";

export default function SubMenuPage() {
  const { categoryDetailId } = useParams();
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const navigate = useNavigate();

  const { categoryDetailName, totalPages, products } = useSubMenu(
    categoryDetailId,
    page,
  );

  const handleCardClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div css={s.containerStyle}>
      <h1 css={s.titleStyle}>{categoryDetailName}</h1>
      <div css={s.gridStyle}>
        {products.map((product) => (
          <ProductCard
            key={product.productId}
            product={product}
            onClick={() => handleCardClick(product.productId)}
          />
        ))}
      </div>
      <div css={s.paginationWrapStyle}>
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}

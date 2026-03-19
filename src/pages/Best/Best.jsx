/** @jsxImportSource @emotion/react */
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchBestProducts } from "../../apis/endpoints/product";
import ProductCard from "../SubMenuPage/components/ProductCard/ProductCard";
import * as s from "./styles";

export default function Best({ title = "베스트상품", limit = 4 }) {
    const navigate = useNavigate();

    const {
        data = [],
        isLoading,
        isError,
    } = useQuery({
        queryKey: ["bestProducts"],
        queryFn: fetchBestProducts,
    });

    if (isLoading) return <div css={s.messageBox}>로딩 중...</div>;
    if (isError)
        return <div css={s.messageBox}>데이터를 불러오지 못했습니다.</div>;

    return (
        <div css={s.container}>
            <h1 css={s.pageTitle}>{title}</h1>
            {data.map((category, index) => {
                const products = Array.isArray(category.products)
                    ? category.products.slice(0, limit)
                    : [];

                return (
                    <section
                        key={`${category.categoryName}-${index}`}
                        css={s.categorySection}
                    >
                        <h2 css={s.categoryTitle}>{category.categoryName}</h2>
                        <div css={s.gridStyle}>
                            {products.map((product) => (
                                <ProductCard
                                    key={product.productId}
                                    product={product}
                                    onClick={() =>
                                        navigate(
                                            `/product/${product.productId}`,
                                        )
                                    }
                                />
                            ))}
                        </div>
                    </section>
                );
            })}
        </div>
    );
}

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchBestProducts } from "../../apis/endpoints/product";
import { toast } from "react-toastify";
/** @jsxImportSource @emotion/react */
import * as s from "./styles";

export default function Best({ title = "베스트상품", limit = 4 }) {
  const navigate = useNavigate();

  const [bestData, setBestData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadBestProducts();
  }, []);

  const loadBestProducts = async () => {
    try {
      setLoading(true);
      const data = await fetchBestProducts();
      const list = Array.isArray(data) ? data : [];
      setBestData(list);
      if (list.length === 0) {
        toast.info("현재 등록된 베스트 상품이 없습니다.");
      }
    } catch (e) {
      toast.error("베스트 상품을 불러오지 못했습니다.");
      setBestData([]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div css={s.messageBox}>베스트 상품을 불러오는 중입니다...</div>;
  }

  if (bestData.length === 0) {
    return <div css={s.messageBox}>베스트 상품이 없습니다.</div>;
  }

  return (
    <div css={s.layout}>
      <div css={s.inner}>
        <div css={s.pageHeader}>
          <h1 css={s.pageTitle}>{title}</h1>
        </div>

        {bestData.map((category, index) => {
          const products = Array.isArray(category.products)
            ? category.products.slice(0, limit)
            : [];

          return (
            <section
              key={`${category.categoryName}-${index}`}
              css={s.categorySection}
            >
              <h2 css={s.categoryTitle}>{category.categoryName}</h2>

              {products.length === 0 ? (
                <div css={s.emptyCategoryBox}>등록된 상품이 없습니다.</div>
              ) : (
                <div css={s.productGrid}>
                  {products.map((product) => (
                    <div
                      key={product.productId}
                      css={s.productCard}
                      onClick={() => navigate(`/product/${product.productId}`)}
                    >
                      <div css={s.thumbnailBox}>
                        <img
                          src={product.thumbnailUrl || "/no-image.png"}
                          alt={product.productName}
                          css={s.thumbnail}
                        />
                        {product.soldOut && (
                          <div css={s.soldOutBadge}>SOLD OUT</div>
                        )}
                      </div>

                      <div css={s.productInfo}>
                        <p css={s.categoryDetailName}>
                          {product.categoryDetailName}
                        </p>

                        <h3 css={s.productName}>{product.productName}</h3>

                        <p css={s.price}>{product.price?.toLocaleString()}원</p>

                        <div css={s.metaRow}>
                          {product.best && <span css={s.bestBadge}>BEST</span>}
                          <span css={s.reviewCount}>
                            리뷰 {product.reviewCount ?? 0}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}

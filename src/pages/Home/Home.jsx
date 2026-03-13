/** @jsxImportSource @emotion/react */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";
import * as s from "./styles";
import { useHomeCard } from "./useHome";

export default function Home() {
  const { data: categories = [], isLoading, isError } = useHomeCard();
  const navigate = useNavigate();

  const categoryList = Array.isArray(categories) ? categories : categories ? [categories] : [];
  const bestItems = categoryList.flatMap((cat) => cat.products ?? []);

  return (
    <div css={s.container}>
      <h2 css={s.sectionTitle}>Best</h2>

      <div css={s.swiperWrapper}>
        {isLoading && <p>로딩 중...</p>}
        {isError && <p>데이터를 불러오지 못했습니다.</p>}
        {!isLoading && !isError && bestItems.length === 0 && (
          <p>등록된 베스트 상품이 없습니다.</p>
        )}
        {!isLoading && !isError && bestItems.length > 0 && (
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            css={s.swiper}
          >
            {bestItems.map((item) => (
              <SwiperSlide key={item.productId} onClick={() => navigate(`/product/${item.productId}`)}>
                <div css={s.card}>
                  <div css={s.cardImage}>
                    {item.thumbnailUrl && <img src={item.thumbnailUrl} alt={item.productName} />}
                  </div>
                  <p css={s.cardTitle}>{item.productName}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
}

/** @jsxImportSource @emotion/react */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import * as s from "./styles";

const BEST_ITEMS = [
  { id: 1, title: "Best 상의", image: null },
  { id: 2, title: "Best 하의", image: null },
  { id: 3, title: "Best 아우터", image: null },
  { id: 4, title: "Best 신발", image: null },
];

export default function Home() {
  return (
    <div css={s.container}>
      <h2 css={s.sectionTitle}>Best</h2>

      <div css={s.swiperWrapper}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          css={s.swiper}
        >
          {BEST_ITEMS.map((item) => (
            <SwiperSlide key={item.id}>
              <div css={s.card}>
                <div css={s.cardImage}>
                  {/* 이미지 들어올 자리!! 여기에 useQuery로 Best아이템들 잡아와서 넣으십시오 */}
                </div>
                <p css={s.cardTitle}>{item.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
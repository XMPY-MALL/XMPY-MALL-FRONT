import { css } from "@emotion/react";
import { XMPY_COLORS } from "../../constants/colors";

export const container = css`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px;
`;

export const sectionTitle = css`
  font-size: 20px;
  font-weight: 700;
  color: ${XMPY_COLORS.BLACK};
  margin-bottom: 24px;
`;

export const swiper = css`
  width: 100%;
  padding-bottom: 40px; /* pagination dot 공간 */
`;

export const card = css`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
`;

export const cardImage = css`
  width: 100%;
  aspect-ratio: 1 / 1;
  background-color: ${XMPY_COLORS.LIGHT_BEIGE};
`;

export const cardTitle = css`
  position: absolute;
  bottom: 16px;
  left: 16px;
  font-size: 16px;
  font-weight: 600;
  color: ${XMPY_COLORS.WHITE};
`;

// styles.js에 추가
export const swiperWrapper = css`
  width: 100%;
  padding-bottom: 40px;

  /* 화살표 크기 & 색상 */
  --swiper-navigation-size: 20px;
  --swiper-navigation-color: ${XMPY_COLORS.GRAY_BROWN};

  /* pagination dot 색상 */
  --swiper-pagination-color: ${XMPY_COLORS.BEIGE_BROWN};
  --swiper-pagination-bullet-inactive-color: ${XMPY_COLORS.LIGHT_BEIGE};
  --swiper-pagination-bullet-inactive-opacity: 1;

  .swiper-button-next,
  .swiper-button-prev {
    &:hover {
      --swiper-navigation-color: ${XMPY_COLORS.BLACK};
    }
  }
`;
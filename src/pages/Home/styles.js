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
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 10px;
    transition: transform 0.2s ease;

    &:hover {
        transform: translateY(-4px);
    }
`;

export const cardImage = css`
    width: 100%;
    aspect-ratio: 3 / 4;
    background-color: ${XMPY_COLORS.LIGHT_BEIGE};
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }
`;

export const cardTitle = css`
    font-size: 14px;
    font-weight: 600;
    color: ${XMPY_COLORS.BLACK};
    padding: 0 2px;
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

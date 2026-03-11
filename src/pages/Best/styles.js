import { css } from "@emotion/react";

export const layout = css`
    width: 100%;
    min-height: 100vh;
    background-color: #fff;
`;

export const inner = css`
    max-width: 1280px;
    margin: 0 auto;
    padding: 60px 20px 100px;
`;

export const pageHeader = css`
    margin-bottom: 40px;
`;

export const pageTitle = css`
    margin: 0;
    font-size: 32px;
    font-weight: 700;
    color: #111;
`;

export const categorySection = css`
    margin-bottom: 60px;
`;

export const categoryTitle = css`
    margin: 0 0 20px;
    font-size: 24px;
    font-weight: 700;
    color: #111;
`;

export const productGrid = css`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 28px 20px;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 480px) {
        grid-template-columns: 1fr;
    }
`;

export const productCard = css`
    cursor: pointer;
`;

export const thumbnailBox = css`
    position: relative;
    width: 100%;
    aspect-ratio: 3 / 4;
    overflow: hidden;
    background-color: #f4efe8;
    border-radius: 8px;
`;

export const thumbnail = css`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.3s ease;

    ${productCard}:hover & {
        transform: scale(1.03);
    }
`;

export const soldOutBadge = css`
    position: absolute;
    top: 12px;
    left: 12px;
    padding: 6px 10px;
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    font-size: 12px;
    font-weight: 600;
    border-radius: 4px;
`;

export const productInfo = css`
    padding-top: 14px;
`;

export const categoryDetailName = css`
    margin: 0 0 6px;
    font-size: 13px;
    color: #888;
`;

export const productName = css`
    margin: 0 0 8px;
    font-size: 16px;
    font-weight: 500;
    color: #111;
    line-height: 1.4;
`;

export const price = css`
    margin: 0 0 10px;
    font-size: 18px;
    font-weight: 700;
    color: #111;
`;

export const metaRow = css`
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const bestBadge = css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 44px;
    height: 24px;
    padding: 0 10px;
    border: 1px solid #111;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 700;
    color: #111;
`;

export const reviewCount = css`
    font-size: 13px;
    color: #777;
`;

export const messageBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 300px;
    font-size: 16px;
    color: #666;
`;

export const emptyCategoryBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 180px;
    border: 1px solid #eee;
    border-radius: 8px;
    color: #888;
`;
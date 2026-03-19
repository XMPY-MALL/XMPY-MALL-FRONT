import { css } from "@emotion/react";
import { XMPY_COLORS } from "../../constants/colors";

export const container = css`
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 20px;
`;

export const pageTitle = css`
    font-size: 20px;
    font-weight: 700;
    color: ${XMPY_COLORS.BLACK};
    margin-bottom: 32px;
`;

export const categorySection = css`
    margin-bottom: 60px;
`;

export const categoryTitle = css`
    font-size: 16px;
    font-weight: 600;
    color: ${XMPY_COLORS.GRAY_BROWN};
    margin-bottom: 24px;
`;

export const gridStyle = css`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px 16px;
`;

export const messageBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 300px;
    font-size: 16px;
    color: ${XMPY_COLORS.GRAY_BROWN};
`;

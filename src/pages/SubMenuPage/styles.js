/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { XMPY_COLORS } from "../../constants/colors";

export const containerStyle = css`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const titleStyle = css`
  font-size: 20px;
  font-weight: 700;
  color: ${XMPY_COLORS.BLACK};
  margin-bottom: 32px;
`;

export const gridStyle = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px 16px;
  margin-bottom: 48px;
`;

export const paginationWrapStyle = css`
  display: flex;
  justify-content: center;
  margin-top: 48px;
`;

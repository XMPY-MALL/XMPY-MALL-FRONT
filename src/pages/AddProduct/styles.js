// styles.js
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { XMPY_COLORS } from "../../constants/colors";

export const containerStyle = css`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  background-color: ${XMPY_COLORS.WHITE};
`;

export const titleStyle = css`
  font-size: 24px;
  font-weight: 600;
  color: ${XMPY_COLORS.BLACK};
  margin-bottom: 32px;
`;

export const topGridStyle = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 40px;
`;

export const leftStyle = css`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const rightStyle = css`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const submitButtonStyle = css`
  width: 100%;
  padding: 16px;
  background-color: ${XMPY_COLORS.GRAY_BROWN};
  color: ${XMPY_COLORS.WHITE};
  font-size: 16px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  margin-top: 40px;

  &:hover {
    background-color: ${XMPY_COLORS.BLACK};
  }
`;

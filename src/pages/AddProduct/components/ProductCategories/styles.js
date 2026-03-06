// styles.js
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { XMPY_COLORS } from "../../../../constants/colors";

export const containerStyle = css`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const sectionStyle = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const labelStyle = css`
  font-size: 14px;
  font-weight: 600;
  color: ${XMPY_COLORS.BLACK};
`;

export const buttonGroupStyle = css`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const categoryButtonStyle = (isSelected) => css`
  padding: 6px 14px;
  font-size: 13px;
  border: 1px solid
    ${isSelected ? XMPY_COLORS.GRAY_BROWN : XMPY_COLORS.LIGHT_BEIGE};
  background-color: ${isSelected ? XMPY_COLORS.GRAY_BROWN : XMPY_COLORS.WHITE};
  color: ${isSelected ? XMPY_COLORS.WHITE : XMPY_COLORS.GRAY_BROWN};
  cursor: pointer;

  &:hover {
    border-color: ${XMPY_COLORS.GRAY_BROWN};
    color: ${isSelected ? XMPY_COLORS.WHITE : XMPY_COLORS.BLACK};
  }
`;

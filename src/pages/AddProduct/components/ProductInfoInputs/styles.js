// styles.js
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { XMPY_COLORS } from "../../../../constants/colors";

export const containerStyle = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const fieldStyle = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const labelStyle = css`
  font-size: 14px;
  font-weight: 600;
  color: ${XMPY_COLORS.BLACK};
`;

export const inputStyle = css`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid ${XMPY_COLORS.LIGHT_BEIGE};
  background-color: ${XMPY_COLORS.WHITE};
  color: ${XMPY_COLORS.BLACK};
  font-size: 14px;
  outline: none;

  &:focus {
    border-color: ${XMPY_COLORS.BEIGE_BROWN};
  }

  &::placeholder {
    color: ${XMPY_COLORS.GRAY_BROWN};
  }
`;

export const priceWrapperStyle = css`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const unitStyle = css`
  font-size: 14px;
  color: ${XMPY_COLORS.GRAY_BROWN};
  white-space: nowrap;
`;

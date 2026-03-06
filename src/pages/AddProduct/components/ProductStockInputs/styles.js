// styles.js
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { XMPY_COLORS } from "../../../../constants/colors";

export const containerStyle = css`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const labelStyle = css`
  font-size: 14px;
  font-weight: 600;
  color: ${XMPY_COLORS.BLACK};
`;

export const stockListStyle = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const headerRowStyle = css`
  display: grid;
  grid-template-columns: 2fr 2fr 1fr 24px;
  gap: 8px;
  font-size: 12px;
  color: ${XMPY_COLORS.GRAY_BROWN};
`;

export const stockRowStyle = css`
  display: grid;
  grid-template-columns: 2fr 2fr 1fr 24px;
  gap: 8px;
  align-items: center;
`;

export const inputStyle = css`
  width: 100%;
  padding: 8px 10px;
  border: 1px solid ${XMPY_COLORS.LIGHT_BEIGE};
  background-color: ${XMPY_COLORS.WHITE};
  color: ${XMPY_COLORS.BLACK};
  font-size: 13px;
  outline: none;

  &:focus {
    border-color: ${XMPY_COLORS.BEIGE_BROWN};
  }

  &::placeholder {
    color: ${XMPY_COLORS.LIGHT_BEIGE};
  }
`;

export const deleteButtonStyle = css`
  width: 30px;
  height: 30px;
  background-color: transparent;
  color: ${XMPY_COLORS.GRAY_BROWN};
  border: none;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    color: ${XMPY_COLORS.BLACK};
  }
`;

export const addButtonStyle = css`
  align-self: flex-start;
  padding: 6px 14px;
  font-size: 13px;
  border: 1px dashed ${XMPY_COLORS.BEIGE_BROWN};
  background-color: transparent;
  color: ${XMPY_COLORS.GRAY_BROWN};
  cursor: pointer;

  &:hover {
    border-color: ${XMPY_COLORS.BLACK};
    color: ${XMPY_COLORS.BLACK};
  }
`;

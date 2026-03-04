import { css } from "@emotion/react";
import { XMPY_COLORS } from "../../../../constants/colors";

export const container = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const badge = css`
  display: inline-block;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: ${XMPY_COLORS.BEIGE_BROWN};
  border: 1px solid ${XMPY_COLORS.BEIGE_BROWN};
  padding: 2px 8px;
  width: fit-content;
`;

export const productName = css`
  font-size: 22px;
  font-weight: 500;
  color: ${XMPY_COLORS.BLACK};
  margin: 0;
`;

export const price = css`
  font-size: 20px;
  font-weight: 600;
  color: ${XMPY_COLORS.BLACK};
  margin: 0;
`;

export const divider = css`
  width: 100%;
  height: 1px;
  background: ${XMPY_COLORS.LIGHT_BEIGE};
`;

export const optionSection = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const optionLabel = css`
  font-size: 13px;
  color: ${XMPY_COLORS.GRAY_BROWN};
  margin: 0;
`;

export const optionGroup = css`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const optionButton = (isActive, soldOut) => css`
  padding: 6px 16px;
  font-size: 13px;
  border: 1px solid
    ${isActive ? XMPY_COLORS.BEIGE_BROWN : XMPY_COLORS.LIGHT_BEIGE};
  background: ${isActive ? XMPY_COLORS.BEIGE_BROWN : "transparent"};
  color: ${soldOut
    ? XMPY_COLORS.LIGHT_BEIGE
    : isActive
      ? XMPY_COLORS.WHITE
      : XMPY_COLORS.BLACK};
  cursor: ${soldOut ? "not-allowed" : "pointer"};
  text-decoration: ${soldOut ? "line-through" : "none"};
  transition: all 0.2s;

  &:hover:not(:disabled) {
    border-color: ${XMPY_COLORS.BEIGE_BROWN};
  }
`;

export const quantityControl = css`
  display: flex;
  align-items: center;
  gap: 0;
  border: 1px solid ${XMPY_COLORS.LIGHT_BEIGE};
  width: fit-content;
`;

export const quantityBtn = css`
  width: 36px;
  height: 36px;
  font-size: 16px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${XMPY_COLORS.BLACK};

  &:hover {
    background: ${XMPY_COLORS.LIGHT_BEIGE};
  }
`;

export const quantityValue = css`
  width: 40px;
  text-align: center;
  font-size: 14px;
  border-left: 1px solid ${XMPY_COLORS.LIGHT_BEIGE};
  border-right: 1px solid ${XMPY_COLORS.LIGHT_BEIGE};
  line-height: 36px;
`;

export const totalRow = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const totalLabel = css`
  font-size: 14px;
  color: ${XMPY_COLORS.GRAY_BROWN};
`;

export const totalPrice = css`
  font-size: 20px;
  font-weight: 700;
  color: ${XMPY_COLORS.BLACK};
`;

export const cartButton = css`
  width: 100%;
  padding: 16px;
  background: ${XMPY_COLORS.GRAY_BROWN};
  color: ${XMPY_COLORS.WHITE};
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0.05em;
  border: none;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${XMPY_COLORS.BLACK};
  }
`;

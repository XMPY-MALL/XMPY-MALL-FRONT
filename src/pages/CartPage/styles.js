import { css } from "@emotion/react";
import { XMPY_COLORS } from "../../constants/colors";

export const container = css`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const title = css`
  font-size: 22px;
  font-weight: 600;
  color: ${XMPY_COLORS.BLACK};
  margin-bottom: 32px;
`;

export const tableHeader = css`
  display: grid;
  grid-template-columns: 1fr 200px 150px 60px;
  padding: 12px 0;
  border-bottom: 1px solid ${XMPY_COLORS.LIGHT_BEIGE};
  font-size: 13px;
  color: ${XMPY_COLORS.GRAY_BROWN};
`;

export const list = css`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const item = css`
  display: grid;
  grid-template-columns: 1fr 200px 150px 60px;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid ${XMPY_COLORS.LIGHT_BEIGE};
`;

export const productInfo = css`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const thumbnail = css`
  width: 80px;
  height: 80px;
  object-fit: cover;
  background: ${XMPY_COLORS.WHITE};
`;

export const productText = css`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const productName = css`
  font-size: 14px;
  font-weight: 500;
  color: ${XMPY_COLORS.BLACK};
  margin: 0;
`;

export const option = css`
  font-size: 13px;
  color: ${XMPY_COLORS.GRAY_BROWN};
  margin: 0;
`;

export const quantityControl = css`
  display: flex;
  align-items: center;
  border: 1px solid ${XMPY_COLORS.LIGHT_BEIGE};
  width: fit-content;
`;

export const quantityBtn = css`
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: ${XMPY_COLORS.BLACK};

  &:hover {
    background: ${XMPY_COLORS.LIGHT_BEIGE};
  }
`;

export const quantityValue = css`
  width: 36px;
  text-align: center;
  font-size: 14px;
  border-left: 1px solid ${XMPY_COLORS.LIGHT_BEIGE};
  border-right: 1px solid ${XMPY_COLORS.LIGHT_BEIGE};
  line-height: 32px;
`;

export const price = css`
  font-size: 15px;
  font-weight: 500;
  color: ${XMPY_COLORS.BLACK};
`;

export const deleteBtn = css`
  background: none;
  border: none;
  cursor: pointer;
  color: ${XMPY_COLORS.GRAY_BROWN};

  &:hover {
    color: ${XMPY_COLORS.BLACK};
  }
`;

export const summary = css`
  margin-top: 32px;
  padding: 24px;
  background: ${XMPY_COLORS.LIGHT_BEIGE};
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const summaryRow = css`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: ${XMPY_COLORS.GRAY_BROWN};
`;

export const summaryTotal = css`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 700;
  color: ${XMPY_COLORS.BLACK};
  padding-top: 12px;
  border-top: 1px solid ${XMPY_COLORS.BEIGE_BROWN};
`;

export const orderButtonWrapper = css`
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
`;

export const orderButton = css`
  padding: 14px 48px;
  background: ${XMPY_COLORS.GRAY_BROWN};
  color: ${XMPY_COLORS.WHITE};
  font-size: 15px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${XMPY_COLORS.BLACK};
  }
`;

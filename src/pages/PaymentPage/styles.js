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

export const layout = css`
  display: flex;
  gap: 40px;
  align-items: flex-start;
`;

export const left = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const right = css`
  width: 300px;
  position: sticky;
  top: 40px;
`;

export const section = css`
  border: 1px solid ${XMPY_COLORS.LIGHT_BEIGE};
  padding: 24px;
`;

export const sectionTitle = css`
  font-size: 15px;
  font-weight: 600;
  color: ${XMPY_COLORS.BLACK};
  margin: 0 0 20px 0;
`;

export const addressBox = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const addressRow = css`
  display: flex;
  gap: 10px;
`;

export const input = css`
  width: 100%;
  padding: 12px 14px;
  border: 1px solid ${XMPY_COLORS.LIGHT_BEIGE};
  font-size: 14px;
  color: ${XMPY_COLORS.BLACK};
  background: ${XMPY_COLORS.WHITE};
  outline: none;

  &::placeholder {
    color: ${XMPY_COLORS.GRAY_BROWN};
  }

  &:focus {
    border-color: ${XMPY_COLORS.BEIGE_BROWN};
  }

  &[readonly] {
    background: ${XMPY_COLORS.LIGHT_BEIGE};
    cursor: default;
  }
`;

export const searchBtn = css`
  white-space: nowrap;
  padding: 12px 16px;
  background: ${XMPY_COLORS.GRAY_BROWN};
  color: ${XMPY_COLORS.WHITE};
  font-size: 13px;
  border: none;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${XMPY_COLORS.BLACK};
  }
`;

export const estimatedDate = css`
  font-size: 13px;
  color: ${XMPY_COLORS.GRAY_BROWN};
  margin: 4px 0 0 0;
`;

export const itemList = css`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const item = css`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const thumbnail = css`
  width: 72px;
  height: 72px;
  object-fit: cover;
  background: ${XMPY_COLORS.WHITE};
`;

export const itemInfo = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const itemName = css`
  font-size: 14px;
  font-weight: 500;
  color: ${XMPY_COLORS.BLACK};
  margin: 0;
`;

export const itemOption = css`
  font-size: 13px;
  color: ${XMPY_COLORS.GRAY_BROWN};
  margin: 0;
`;

export const itemPrice = css`
  font-size: 14px;
  font-weight: 500;
  color: ${XMPY_COLORS.BLACK};
`;

export const summary = css`
  border: 1px solid ${XMPY_COLORS.LIGHT_BEIGE};
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 14px;
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
  font-size: 16px;
  font-weight: 700;
  color: ${XMPY_COLORS.BLACK};
  padding-top: 14px;
  border-top: 1px solid ${XMPY_COLORS.LIGHT_BEIGE};
`;

export const payButton = css`
  width: 100%;
  padding: 14px;
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

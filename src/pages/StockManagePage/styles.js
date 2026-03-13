/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { XMPY_COLORS } from "../../constants/colors";

export const containerStyle = css`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px 80px;
  background-color: ${XMPY_COLORS.WHITE};
`;

export const pageTitleSectionStyle = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 28px;
`;

export const pageTitleStyle = css`
  font-size: 36px;
  font-weight: 700;
  color: ${XMPY_COLORS.BLACK};
  margin: 0;
`;

export const pageDescStyle = css`
  font-size: 18px;
  color: ${XMPY_COLORS.GRAY_BROWN};
  margin: 0;
`;

export const contentLayoutStyle = css`
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 44px;
  align-items: start;
`;

export const sidePanelStyle = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const categoryTabWrapperStyle = css`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const categoryTabStyle = (isActive) => css`
  min-width: 56px;
  height: 30px;
  padding: 0 14px;
  border: 1px solid ${isActive ? XMPY_COLORS.GRAY_BROWN : XMPY_COLORS.LIGHT_BEIGE};
  background-color: ${isActive ? XMPY_COLORS.GRAY_BROWN : XMPY_COLORS.WHITE};
  color: ${isActive ? XMPY_COLORS.WHITE : XMPY_COLORS.GRAY_BROWN};
  font-size: 13px;
  cursor: pointer;
`;

export const productListStyle = css`
  max-height: 640px;
  overflow-y: auto;
  padding-right: 8px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const productCardStyle = (isSelected) => css`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 14px;
  border: 1px solid ${isSelected ? XMPY_COLORS.GRAY_BROWN : XMPY_COLORS.LIGHT_BEIGE};
  background-color: ${XMPY_COLORS.WHITE};
  cursor: pointer;
  text-align: left;
`;

export const productThumbStyle = css`
  width: 56px;
  height: 56px;
  background-color: #e9e4dc;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${XMPY_COLORS.BLACK};
  font-size: 14px;
  font-weight: 600;
  flex-shrink: 0;
  overflow: hidden;
`;

export const productImageStyle = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const productMetaStyle = css`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const productNameStyle = css`
  font-size: 16px;
  font-weight: 700;
  color: ${XMPY_COLORS.BLACK};
  margin: 0;
`;

export const productInfoStyle = css`
  font-size: 14px;
  color: ${XMPY_COLORS.GRAY_BROWN};
  margin: 0;
`;

export const mainPanelStyle = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const topActionStyle = css`
  display: flex;
  justify-content: flex-end;
`;

export const addOptionButtonStyle = css`
  height: 42px;
  padding: 0 18px;
  border: 1px solid ${XMPY_COLORS.LIGHT_BEIGE};
  background-color: ${XMPY_COLORS.WHITE};
  color: ${XMPY_COLORS.GRAY_BROWN};
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  cursor: pointer;
`;

export const productHeaderStyle = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const selectedProductNameStyle = css`
  font-size: 34px;
  font-weight: 700;
  color: ${XMPY_COLORS.BLACK};
  margin: 0;
`;

export const selectedProductInfoStyle = css`
  font-size: 20px;
  color: ${XMPY_COLORS.GRAY_BROWN};
  margin: 0;
`;

export const summaryBoxGroupStyle = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px;
`;

export const summaryBoxStyle = css`
  min-height: 96px;
  border: 1px solid ${XMPY_COLORS.LIGHT_BEIGE};
  background-color: #fbfaf6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 18px 20px;
  gap: 10px;
`;

export const summaryLabelStyle = css`
  font-size: 14px;
  color: ${XMPY_COLORS.GRAY_BROWN};
`;

export const summaryValueStyle = css`
  font-size: 54px;
  line-height: 1;
  font-weight: 700;
  color: ${XMPY_COLORS.BLACK};
`;

export const tableWrapperStyle = css`
  width: 100%;
`;

export const tableHeaderStyle = css`
  display: grid;
  grid-template-columns: 1.2fr 1fr 1fr 1fr 160px;
  gap: 12px;
  padding: 14px 0;
  border-bottom: 1px solid ${XMPY_COLORS.LIGHT_BEIGE};
  font-size: 15px;
  color: ${XMPY_COLORS.GRAY_BROWN};
`;

export const tableBodyStyle = css`
  display: flex;
  flex-direction: column;
`;

export const tableRowStyle = css`
  display: grid;
  grid-template-columns: 1.2fr 1fr 1fr 1fr 160px;
  gap: 12px;
  align-items: center;
  min-height: 58px;
  border-bottom: 1px solid #f0ece6;
`;

export const tableTextStyle = css`
  font-size: 16px;
  color: ${XMPY_COLORS.BLACK};
`;

export const statusTextStyle = (isSoldOut) => css`
  font-size: 15px;
  font-weight: 600;
  color: ${isSoldOut ? "#e05a5a" : XMPY_COLORS.GRAY_BROWN};
`;

export const actionButtonsStyle = css`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: flex-start;
`;

export const lineButtonStyle = css`
  min-width: 54px;
  height: 32px;
  border: 1px solid ${XMPY_COLORS.LIGHT_BEIGE};
  background-color: ${XMPY_COLORS.WHITE};
  color: ${XMPY_COLORS.GRAY_BROWN};
  font-size: 14px;
  cursor: pointer;
`;

export const iconDeleteButtonStyle = css`
  width: 32px;
  height: 32px;
  border: 1px solid ${XMPY_COLORS.LIGHT_BEIGE};
  background-color: ${XMPY_COLORS.WHITE};
  color: ${XMPY_COLORS.GRAY_BROWN};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 16px;
`;

export const editInputStyle = css`
  width: 100%;
  height: 36px;
  padding: 0 10px;
  border: 1px solid ${XMPY_COLORS.LIGHT_BEIGE};
  background-color: ${XMPY_COLORS.WHITE};
  font-size: 14px;
  color: ${XMPY_COLORS.BLACK};
  outline: none;
`;

export const editSelectStyle = css`
  width: 100%;
  height: 36px;
  padding: 0 10px;
  border: 1px solid ${XMPY_COLORS.LIGHT_BEIGE};
  background-color: ${XMPY_COLORS.WHITE};
  font-size: 14px;
  color: ${XMPY_COLORS.BLACK};
  outline: none;
`;

export const emptyBoxStyle = css`
  width: 100%;
  min-height: 180px;
  border: 1px solid ${XMPY_COLORS.LIGHT_BEIGE};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${XMPY_COLORS.GRAY_BROWN};
  font-size: 16px;
`;
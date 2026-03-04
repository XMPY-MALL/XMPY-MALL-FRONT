import { css } from "@emotion/react";
import { XMPY_COLORS } from "../../constants/colors";

export const container = css`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const topSection = css`
  display: flex;
  gap: 40px;
  margin-bottom: 60px;
`;

export const tabBar = css`
  display: flex;
  border: none;
  border-bottom: 2px solid ${XMPY_COLORS.LIGHT_BEIGE};
  margin-bottom: 40px;
`;

export const tabButton = (isActive) => css`
  flex: 1;
  padding: 16px 0;
  font-size: 16px;
  font-weight: ${isActive ? "600" : "400"};
  color: ${isActive ? XMPY_COLORS.BLACK : XMPY_COLORS.GRAY_BROWN};
  border: none;
  border-bottom: ${isActive
    ? `2px solid ${XMPY_COLORS.GRAY_BROWN}`
    : "2px solid transparent"};
  margin-bottom: -2px;
  background: none;
  cursor: pointer;
  transition: all 0.2s;
`;

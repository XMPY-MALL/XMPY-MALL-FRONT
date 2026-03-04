import { css } from "@emotion/react";
import { XMPY_COLORS } from "../../../../constants/colors";

export const container = css`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 0;
`;

export const header = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const title = css`
  font-size: 16px;
  font-weight: 600;
  color: ${XMPY_COLORS.BLACK};
  margin: 0;
`;

export const list = css`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1px;
  background: ${XMPY_COLORS.LIGHT_BEIGE};
`;

export const item = css`
  background: ${XMPY_COLORS.WHITE};
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const itemTop = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const userName = css`
  font-size: 13px;
  font-weight: 600;
  color: ${XMPY_COLORS.BLACK};
`;

export const createdAt = css`
  font-size: 12px;
  color: ${XMPY_COLORS.GRAY_BROWN};
`;

export const content = css`
  font-size: 14px;
  color: ${XMPY_COLORS.BLACK};
  line-height: 1.6;
  margin: 0;
`;

export const moreButton = css`
  display: block;
  width: 100%;
  padding: 14px;
  margin-top: 1px;
  background: ${XMPY_COLORS.WHITE};
  border: none;
  font-size: 13px;
  color: ${XMPY_COLORS.GRAY_BROWN};
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${XMPY_COLORS.LIGHT_BEIGE};
  }
`;

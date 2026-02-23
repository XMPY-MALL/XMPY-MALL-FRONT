// Footer/styles.ts
import { css } from "@emotion/react";
import { XMPY_COLORS } from "../../constants/colors";

export const container = css`
  width: 100%;
  background-color: ${XMPY_COLORS.GRAY_BROWN};
  padding: 48px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const inner = css`
  max-width: 1200px;
  padding: 0 40px;
  display: flex;
  gap: 240px;
`;

export const column = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const title = css`
  font-size: 13px;
  font-weight: 700;
  color: ${XMPY_COLORS.WHITE};
  margin-bottom: 8px;
  letter-spacing: 0.5px;
`;

export const link = css`
  font-size: 12px;
  color: ${XMPY_COLORS.LIGHT_BEIGE};
  text-decoration: none;

  &:hover {
    color: ${XMPY_COLORS.WHITE};
  }
`;

export const text = css`
  font-size: 12px;
  color: ${XMPY_COLORS.LIGHT_BEIGE};
  margin: 0;
`;
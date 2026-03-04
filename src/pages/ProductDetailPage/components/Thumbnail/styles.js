import { css } from "@emotion/react";
import { XMPY_COLORS } from "../../../../constants/colors";

export const container = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 500px;
`;

export const mainImg = css`
  width: 100%;
  height: 500px;
  object-fit: cover;
  background: ${XMPY_COLORS.LIGHT_BEIGE};
`;

export const thumbList = css`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

export const thumbItem = (isActive) => css`
  width: 60px;
  height: 60px;
  object-fit: cover;
  cursor: pointer;
  border: 2px solid
    ${isActive ? XMPY_COLORS.BEIGE_BROWN : XMPY_COLORS.LIGHT_BEIGE};
  opacity: ${isActive ? 1 : 0.6};
  transition: all 0.2s;

  &:hover {
    opacity: 1;
    border-color: ${XMPY_COLORS.BEIGE_BROWN};
  }
`;

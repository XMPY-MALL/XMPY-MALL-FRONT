import { css } from "@emotion/react";
import { XMPY_COLORS } from "../../../../constants/colors";

export const cardStyle = css`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const imageWrapStyle = css`
  position: relative;
  width: 100%;
  aspect-ratio: 3 / 4;
  background: ${XMPY_COLORS.LIGHT_BEIGE};
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const soldOutOverlayStyle = css`
  position: absolute;
  inset: 0;
  background: rgba(90, 85, 80, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const soldOutTextStyle = css`
  color: ${XMPY_COLORS.WHITE};
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.1em;
`;

export const infoStyle = css`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const categoryStyle = css`
  font-size: 11px;
  color: ${XMPY_COLORS.GRAY_BROWN};
`;

export const nameStyle = css`
  font-size: 14px;
  font-weight: 600;
  color: ${XMPY_COLORS.BLACK};
  margin: 0;
`;

export const priceStyle = css`
  font-size: 14px;
  color: ${XMPY_COLORS.BLACK};
  margin: 0;
`;

export const reviewStyle = css`
  font-size: 11px;
  color: ${XMPY_COLORS.GRAY_BROWN};
`;

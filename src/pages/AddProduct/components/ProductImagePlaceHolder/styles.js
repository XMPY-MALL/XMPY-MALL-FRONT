// styles.js
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { XMPY_COLORS } from "../../../../constants/colors";

export const containerStyle = css`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const titleStyle = css`
  font-size: 14px;
  font-weight: 600;
  color: ${XMPY_COLORS.BLACK};
`;

export const hiddenInputStyle = css`
  display: none;
`;

export const previewListStyle = css`
  display: flex;
  gap: 12px;
`;

export const previewItemStyle = css`
  position: relative;
  width: 100px;
  height: 100px;
`;

export const previewImageStyle = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 1px solid ${XMPY_COLORS.LIGHT_BEIGE};
`;

export const deleteButtonStyle = css`
  position: absolute;
  top: -8px;
  right: -8px;
  width: 22px;
  height: 22px;
  background-color: ${XMPY_COLORS.BLACK};
  color: ${XMPY_COLORS.WHITE};
  border: none;
  border-radius: 50%;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: ${XMPY_COLORS.GRAY_BROWN};
  }
`;

export const placeholderStyle = css`
  width: 100px;
  height: 100px;
  border: 1px dashed ${XMPY_COLORS.BEIGE_BROWN};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  cursor: pointer;

  &:hover {
    border-color: ${XMPY_COLORS.BLACK};
  }
`;

export const plusStyle = css`
  font-size: 20px;
  color: ${XMPY_COLORS.GRAY_BROWN};
`;

export const placeholderTextStyle = css`
  font-size: 11px;
  color: ${XMPY_COLORS.GRAY_BROWN};
`;

export const countStyle = css`
  font-size: 12px;
  color: ${XMPY_COLORS.GRAY_BROWN};
`;

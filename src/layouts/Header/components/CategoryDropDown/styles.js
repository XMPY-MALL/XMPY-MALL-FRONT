// CategoryDropdown/styles.js
import { css } from "@emotion/react";
import { XMPY_COLORS } from "../../../../constants/colors";

export const container = css`
  position: relative;
`;

export const navLink = css`
  display: flex;
  align-items: center;
  height: 64px; /* mainBar 높이와 동일 */
  font-size: 15px;
  color: ${XMPY_COLORS.GRAY_BROWN};
  letter-spacing: 0.5px;
  transition: color 0.2s;
  cursor: pointer;

  &:hover {
    color: ${XMPY_COLORS.BLACK};
  }
`;

export const dropdown = (isHovered) => css`
  display: ${isHovered ? "block" : "none"};
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  background: ${XMPY_COLORS.WHITE};
  border: 1px solid ${XMPY_COLORS.LIGHT_BEIGE};
  border-top: none;
  list-style: none;
  padding: 8px 0;
  margin: 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
`;

export const dropdownItem = css`
  display: block;
  padding: 8px 16px;
  white-space: nowrap;
  text-decoration: none;
  font-size: 14px;
  color: ${XMPY_COLORS.GRAY_BROWN};
  transition:
    color 0.2s,
    background 0.2s;

  &:hover {
    background: ${XMPY_COLORS.LIGHT_BEIGE};
    color: ${XMPY_COLORS.BLACK};
  }
`;

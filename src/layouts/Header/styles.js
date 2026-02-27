// Header/styles.ts
import { css } from "@emotion/react";
import { XMPY_COLORS } from "../../constants/colors";

// 전체 헤더 래퍼
// Header/styles.js 수정
export const container = css`
  width: 100%;
  background-color: ${XMPY_COLORS.WHITE};
  border-bottom: 1px solid ${XMPY_COLORS.LIGHT_BEIGE};
  position: relative;
`;

/* ── 1줄: 서브바 ── */
export const topBar = css`
  width: 100%;
  height: 36px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 32px;
  padding: 0 40px;
  border-bottom: 1px solid ${XMPY_COLORS.LIGHT_BEIGE};
`;

export const topBarLink = css`
  font-size: 14px;
  font-weight: 700;
  color: ${XMPY_COLORS.GRAY_BROWN};
  text-decoration: none;

  &:hover {
    color: ${XMPY_COLORS.BLACK};
  }
`;

/* ── 2줄: 메인바 ── */
export const mainBar = css`
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
`;

export const logo = css`
  font-size: 22px;
  font-weight: 700;
  color: ${XMPY_COLORS.BLACK};
  text-decoration: none;
  letter-spacing: 2px;
  min-width: 100px;

  &:hover {
    color: ${XMPY_COLORS.BLACK};
  }
`;

export const nav = css`
  display: flex;
  gap: 52px;
  flex-grow: 1;
  justify-content: center;
`;

export const navLink = css`
  display: flex;
  align-items: center;
  height: 64px;
  font-size: 15px;
  color: ${XMPY_COLORS.GRAY_BROWN};
  text-decoration: none;
  letter-spacing: 0.5px;
  transition: color 0.2s;

  &:hover {
    color: ${XMPY_COLORS.BLACK};
  }
`;

export const iconSection = css`
  display: flex;
  align-items: center;
  gap: 16px;
  min-width: 100px;
  justify-content: flex-end;
`;

export const iconButton = css`
  background: none;
  border: none;
  cursor: pointer;
  color: ${XMPY_COLORS.GRAY_BROWN};
  display: flex;
  align-items: center;
  font-size: 26px;
  padding: 0;
  text-decoration: none;

  &:hover {
    color: ${XMPY_COLORS.BLACK};
  }
`;

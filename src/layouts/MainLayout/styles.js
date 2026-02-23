import { css } from "@emotion/react";
import { XMPY_COLORS } from "../../constants/colors";

export const layout = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background-color: ${XMPY_COLORS.WHITE};
`;

export const main = css`
  flex-grow: 1;
  overflow: auto;
  background-color: ${XMPY_COLORS.WHITE};
`;
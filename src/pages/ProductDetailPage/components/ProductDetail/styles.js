import { css } from "@emotion/react";
import { XMPY_COLORS } from "../../../../constants/colors";

export const container = css`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 0;
  color: ${XMPY_COLORS.BLACK};
  line-height: 1.8;
  font-size: 15px;

  p {
    margin-bottom: 16px;
  }

  img {
    width: 100%;
    height: auto;
    margin: 24px 0;
  }
`;

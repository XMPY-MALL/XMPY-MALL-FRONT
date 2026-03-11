// styles.js
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { XMPY_COLORS } from "../../../../constants/colors";

export const containerStyle = css`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 40px;
`;

export const labelStyle = css`
  font-size: 14px;
  font-weight: 600;
  color: ${XMPY_COLORS.BLACK};
`;

export const editorWrapperStyle = css`
  .ql-toolbar {
    border-color: ${XMPY_COLORS.LIGHT_BEIGE};
    background-color: ${XMPY_COLORS.WHITE};
  }
  .ql-container {
    font-size: 14px;
    border-color: ${XMPY_COLORS.LIGHT_BEIGE};
    min-height: 320px;
    color: ${XMPY_COLORS.BLACK};
  }
  .ql-editor {
    min-height: 320px;
    &::before {
      color: ${XMPY_COLORS.GRAY_BROWN};
    }
  }
  .ql-stroke {
    stroke: ${XMPY_COLORS.GRAY_BROWN};
  }
  .ql-fill {
    fill: ${XMPY_COLORS.GRAY_BROWN};
  }
`;

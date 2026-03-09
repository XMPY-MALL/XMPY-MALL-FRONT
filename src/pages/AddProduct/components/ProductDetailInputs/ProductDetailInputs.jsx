// ProductDetailInputs.jsx
/** @jsxImportSource @emotion/react */
import QuillEditor from "../../../../quill/QuillEditor";
import * as s from "./styles";

export default function ProductDetailInputs({
  quillRef,
  modules,
  detailContent,
  onChange,
}) {
  return (
    <div css={s.containerStyle}>
      <label css={s.labelStyle}>상품 페이지 작성</label>
      <div css={s.editorWrapperStyle}>
        <QuillEditor
          quillRef={quillRef}
          value={detailContent}
          onChange={onChange}
          modules={modules}
        />
      </div>
    </div>
  );
}

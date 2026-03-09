import { useRef, useCallback } from "react";
import { supabase, BUCKET_NAME } from "../supabase/supabase";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

const uploadImageToSupabase = async (file) => {
  const ext = file.name.split(".").pop();
  const fileName = `${uuidv4()}.${ext}`;

  const { error } = await supabase.storage
    .from(BUCKET_NAME)
    .upload(fileName, file);

  if (error) throw new Error(error.message);

  const { data } = supabase.storage.from(BUCKET_NAME).getPublicUrl(fileName);

  return data.publicUrl;
};

export const useQuillEditor = () => {
  const quillRef = useRef(null);

  // 리렌더링이 일어나더라도 동일한 imageHandler 함수가 유지되도록 useCallback 사용
  // 그냥 쓰면 modules 객체가 매번 새로 만들어지면서 Quill이 툴바를 재설정하는 문제가 발생
  const imageHandler = useCallback(() => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.click();

    input.onchange = async () => {
      const file = input.files?.[0];
      if (!file) return;

      const maxSize = 3 * 1024 * 1024;
      if (file.size > maxSize) {
        toast.error("이미지는 3MB 초과 불가능합니다");
        return;
      }

      try {
        const url = await uploadImageToSupabase(file);
        const editor = quillRef.current?.getEditor();
        const range = editor?.getSelection(true);
        editor?.insertEmbed(range.index, "image", url);
        toast.success("이미지 업로드 완료");
      } catch (e) {
        toast.error("이미지 업로드 실패");
        console.error(e);
      }
    };
  }, []);

  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, false] }],
        ["bold", "italic", "underline", "strike"],
        ["image"],
        [{ list: "ordered" }, { list: "bullet" }],
      ],
      handlers: {
        image: imageHandler,
      },
    },
  };

  return { quillRef, modules };
};

// useUploadImages.js
import { v4 as uuidv4 } from "uuid";
import { supabase, BUCKET_NAME } from "../../../supabase/supabase";

export const useUploadImages = () => {
  const uploadImages = async (images) => {
    const urls = await Promise.all(
      images.map(async ({ file }) => {
        const extension = file.name.split(".").pop();
        const path = `products/${uuidv4()}.${extension}`;
        const { data, error } = await supabase.storage
          .from(BUCKET_NAME)
          .upload(path, file);
        if (error) throw error;
        const {
          data: { publicUrl },
        } = supabase.storage.from(BUCKET_NAME).getPublicUrl(data.path);
        return publicUrl;
      }),
    );
    return urls;
  };

  return { uploadImages };
};

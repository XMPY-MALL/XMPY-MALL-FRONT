import { useState } from "react";

export const useProductImages = (maxCount = 3) => {
  const [images, setImages] = useState([]);

  const handleChange = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => ({
      file,
      previewUrl: URL.createObjectURL(file),
    }));
    setImages((prev) => [...prev, ...newImages].slice(0, maxCount));
  };

  const handleDelete = (index) => {
    URL.revokeObjectURL(images[index].previewUrl);
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  return {
    images,
    handleChange,
    handleDelete,
  };
};

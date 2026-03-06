export default function ProductImagePlaceHolder({
  images,
  handleImageChange,
  handleDelete,
}) {
  return (
    <div>
      <h2>상품 이미지</h2>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageChange}
        disabled={images.length >= 3}
      />
      <div>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.previewUrl} alt={`상품 이미지 ${index + 1}`} />
            <button type="button" onClick={() => handleDelete(index)}>
              ×
            </button>
          </div>
        ))}
      </div>
      <p>{images.length}/3 장 등록됨</p>
    </div>
  );
}

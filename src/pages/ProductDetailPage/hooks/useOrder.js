export const useOrder = (productId) => {
  // 추후 실제 API로 교체
  return {
    colors: [
      { label: "화이트", value: "WHITE", soldOut: false },
      { label: "베이지", value: "BEIGE", soldOut: false },
      { label: "네이비", value: "NAVY", soldOut: true },
    ],
    sizes: [
      { label: "S", value: "S", soldOut: false },
      { label: "M", value: "M", soldOut: false },
      { label: "L", value: "L", soldOut: false },
      { label: "XL", value: "XL", soldOut: true },
    ],
  };
};

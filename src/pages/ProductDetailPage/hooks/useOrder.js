export const useOrder = (productId) => {
  return {
    colors: [
      { id: 1, label: "화이트", soldOut: false },
      { id: 2, label: "베이지", soldOut: false },
      { id: 3, label: "네이비", soldOut: true },
    ],
    sizes: [
      { id: 1, label: "S", soldOut: false },
      { id: 2, label: "M", soldOut: false },
      { id: 3, label: "L", soldOut: false },
      { id: 4, label: "XL", soldOut: true },
    ],
  };
};

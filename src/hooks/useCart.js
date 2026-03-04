const CART_KEY = "xmpyCart";

const getCart = () => {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) ?? [];
  } catch {
    return [];
  }
};

const saveCart = (cart) => {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

const isSameItem = (a, b) =>
  a.productId === b.productId &&
  a.color.id === b.color.id &&
  a.size.id === b.size.id;

export const useCart = () => {
  const addToCart = (newItem) => {
    const cart = getCart();
    const existIndex = cart.findIndex((item) => isSameItem(item, newItem));

    if (existIndex !== -1) {
      cart[existIndex].quantity += newItem.quantity;
      saveCart(cart);
    } else {
      saveCart([...cart, newItem]);
    }
  };

  return { addToCart };
};

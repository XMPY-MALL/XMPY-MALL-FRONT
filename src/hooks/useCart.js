import { useState } from "react";

// hooks/useCart.js
const CART_KEY = "xmpy_cart";

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
  const [cartItems, setCartItems] = useState(getCart());

  const sync = (newCart) => {
    saveCart(newCart);
    setCartItems(newCart);
  };

  const addToCart = (newItem) => {
    const existIndex = cartItems.findIndex((item) => isSameItem(item, newItem));
    if (existIndex !== -1) {
      const updated = [...cartItems];
      updated[existIndex].quantity += newItem.quantity;
      sync(updated);
    } else {
      sync([...cartItems, newItem]);
    }
  };

  const updateQuantity = (targetItem, delta) => {
    const updated = cartItems
      .map((item) =>
        isSameItem(item, targetItem)
          ? { ...item, quantity: item.quantity + delta }
          : item,
      )
      .filter((item) => item.quantity > 0);
    sync(updated);
  };

  const removeFromCart = (targetItem) => {
    sync(cartItems.filter((item) => !isSameItem(item, targetItem)));
  };

  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return {
    cartItems,
    addToCart,
    updateQuantity,
    removeFromCart,
    totalQuantity,
    totalPrice,
  };
};

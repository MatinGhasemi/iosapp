export const addToCart = (id: string): void => {
  try {
      const cart = JSON.parse(localStorage.getItem("cart") || '{}');
      if (!cart[id]) {
          cart[id] = { q: 0 };  // Initialize with 0 to simplify the increment logic
      }
      cart[id].q += 1;
      localStorage.setItem('cart', JSON.stringify(cart));
  } catch {
      const cart: { [key: string]: { q: number } } = { [id]: { q: 1 } };
      localStorage.setItem('cart', JSON.stringify(cart));
  }
};

export const removeFromCart = (id: string): void => {
  try {
    const cart = JSON.parse(decodeURIComponent(localStorage.getItem('cart') || '{}'));

    if (cart[id].q === 1) {
      delete cart[id];
    } else {
      cart[id].q -= 1;
    }

    localStorage.setItem('cart', encodeURIComponent(JSON.stringify(cart)));
  } catch (error) {
    console.error("Error removing item from cart:", error);
  }
};


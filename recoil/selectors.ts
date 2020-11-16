import { quantitySetter, wishlist, wishlistToCart } from "recoil/atoms";
import { selector } from "recoil";
import { cart } from "./atoms";
import Item from "antd/lib/list/Item";

const cartUpdate = selector({
  key: "cartUpdate",
  get: ({ get }) => {
    const cartState = get(cart);
    const totalAmount = cartState.cartItems
      ?.map((item) => item.price * item.quantity)
      .reduce((a, b) => a + b, 0);
    return {
      cartItems: cartState.cartItems,
      amount: totalAmount?.toFixed(2),
      cartTotal: cartState.cartItems?.length,
    };
  },
});

const addToCartSelector = selector({
  key: "addToCartSelector",
  set: ({ get, set }, newItem) => {
    const cartState = get(cart);
    const quantity = get(quantitySetter);
    if (quantity) {
      const otherProducts = cartState.cartItems.filter(
        (item) => item.id !== newItem.id
      );
      const filterCartItem = cartState.cartItems
        .filter((item) => item.id === newItem.id)
        .map((item) => ({ ...item, quantity: item.quantity + quantity }));
      if (filterCartItem.length) {
        set(cart, {
          ...cartState,
          cartItems: [...otherProducts, ...filterCartItem],
        });
      } else {
        set(cart, {
          ...cartState,
          cartItems: [
            ...cartState.cartItems,
            { ...newItem, quantity: quantity },
          ],
        });
      }
    }
  },
});

const wishListSelector = selector({
  key: "wishListSelector",
  get: ({ get }) => {
    const wishlistState = get(wishlist);
    return {
      ...wishlistState,
      wishlistTotal: wishlistState.wishlistItems.length,
    };
  },
});
export { cartUpdate, wishListSelector, addToCartSelector };

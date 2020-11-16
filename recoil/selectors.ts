import { wishlist, wishlistToCart } from "recoil/atoms";
import { selector } from "recoil";
import { cart } from "./atoms";

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
    set(cart, { ...cartState, cartItems: [...cartState.cartItems, newItem] });
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

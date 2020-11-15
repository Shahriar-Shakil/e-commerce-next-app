import { updateQuantity } from "recoil/atoms";
import { selector } from "recoil";
import { cart } from "./atoms";

const cartUpdate = selector({
  key: "cartUpdate",
  get: ({ get }) => {
    const cartState = get(cart);
    const quantityState = get(updateQuantity);
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
export { cartUpdate };

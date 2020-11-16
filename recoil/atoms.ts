import { atom } from "recoil";

const auth = atom({
  key: "auth",
  default: false,
});
const cart = atom({
  key: "cart",
  default: { cartItems: [], amount: 0, cartTotal: 0 },
});
const wishlist = atom({
  key: "wishlist",
  default: { wishlistItems: [], wishlistTotal: 0 },
});
const quantitySetter = atom({
  key: "quantitySetter",
  default: 1,
});
const updateQuantity = atom({
  key: "updateQuantity",
  default: { id: null, action: "" },
});
const wishlistToCart = atom({
  key: "wishlistToCart",
  default: null,
});

export { auth, cart, wishlist, quantitySetter, updateQuantity, wishlistToCart };

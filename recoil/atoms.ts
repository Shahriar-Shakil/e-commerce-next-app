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
const priceRangeAtom = atom({
  key: "priceRangeAtom",
  default: {
    max: 1000,
    min: 1,
  },
});
const productsStore = atom({
  key: "productStore",
  default: [],
});
const categories = atom({
  key: "categories",
  default: "all",
});
export {
  auth,
  cart,
  wishlist,
  quantitySetter,
  updateQuantity,
  wishlistToCart,
  priceRangeAtom,
  productsStore,
  categories,
};

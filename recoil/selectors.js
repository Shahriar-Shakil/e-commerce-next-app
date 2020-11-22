import { quantitySetter, wishlist, wishlistToCart } from "recoil/atoms";
import { selector } from "recoil";
import { cart, priceRangeAtom, productsStore, categories } from "./atoms";
import { openNotificationWithIcon } from "@lib/notification-message";

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

const addToWishList = selector({
  key: "addToWishlist",
  set: ({ get, set }, itemToAdd) => {
    const wishlistState = get(wishlist);
    const alreadyHave = wishlistState.wishlistItems.some(
      (item) => item.id === itemToAdd.id
    );
    if (!alreadyHave) {
      openNotificationWithIcon("success", "successfully added on wishlist");
      set(wishlist, {
        ...wishlistState,
        wishlistItems: [...wishlistState.wishlistItems, itemToAdd],
      });
    } else {
      openNotificationWithIcon("warning", "warning", "Already In Wishlist");
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
const filterProductsByPrice = selector({
  key: "filterProductsByPrice",
  set: ({ get, set }, payload) => {
    const currentCategory = get(categories);
    const filterByRange = payload.allProducts?.filter((x) => {
      if (currentCategory === x.category) {
        return x.price >= payload.min && x.price <= payload.max;
      } else if (currentCategory === "all") {
        return x.price >= payload.min && x.price <= payload.max;
      }
    });
    set(productsStore, [...filterByRange]);
    set(priceRangeAtom, { ...priceRangeAtom, ...payload });
  },
});
const filterProductsByCategories = selector({
  key: "filterProductsByCategories",
  set: ({ set }, payload) => {
    if (payload.category === "all") {
      return [
        set(productsStore, payload.products),
        set(categories, payload.category),
      ];
    }
    const filterByCategory = payload.products?.filter(
      (item) => item.category === payload.category
    );

    set(productsStore, filterByCategory);
    set(categories, payload.category);
  },
});
export {
  cartUpdate,
  wishListSelector,
  addToCartSelector,
  addToWishList,
  filterProductsByPrice,
  filterProductsByCategories,
};

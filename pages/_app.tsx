import "@styles/index.css";
import "@styles/customStyle.css";
import "@styles/effects.css";
import "antd/dist/antd.css";

import { RecoilRoot, useRecoilTransactionObserver_UNSTABLE } from "recoil";
import { auth, cart, wishlist } from "../recoil/atoms";
export default function CustomApp({ Component, pageProps }) {
  return (
    <RecoilRoot initializeState={initializeState}>
      <PersistenceObserver />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

function initializeState({ set }) {
  if (process.browser) {
    const state = localStorage.getItem("state");
    if (state) {
      set(auth, JSON.parse(state).authState);
      set(cart, JSON.parse(state).cartState);
      set(wishlist, JSON.parse(state).wishlistState);
    }
  }
}
export function PersistenceObserver() {
  useRecoilTransactionObserver_UNSTABLE(({ snapshot }) => {
    const authState = snapshot.getLoadable(auth).contents;
    const cartState = snapshot.getLoadable(cart).contents;
    const wishlistState = snapshot.getLoadable(wishlist).contents;
    localStorage.setItem(
      "state",
      JSON.stringify({ authState, cartState, wishlistState })
    );
  });
  return null;
}

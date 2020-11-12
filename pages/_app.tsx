import "@styles/index.css";
import "@styles/customStyle.css";
import "@styles/effects.css";
import "antd/dist/antd.css";
import { SWRConfig } from "swr";

const fetcher = (url) => request.post(url).then((r) => r.data);

export default function CustomApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

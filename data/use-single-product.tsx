import { request } from "@config/api";

import useSWR from "swr";
const fetcher = (url) => request.get(url).then((r) => r.data);

export function useSingleProduct(productId) {
  const { data, error } = useSWR(
    `https://fakestoreapi.com/products/${productId}`,
    fetcher
  );
  return {
    item: data,
    loading: !data && !error,
    error,
  };
}

import { request } from "@config/api";

import useSWR from "swr";
const fetcher = (url) => request.get(url).then((r) => r.data);

export function useProducts() {
  const { data, error } = useSWR("https://fakestoreapi.com/products", fetcher);
  return {
    products: data,
    loading: !data && !error,
    error,
  };
}

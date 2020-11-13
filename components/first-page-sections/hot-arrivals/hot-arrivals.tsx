import CategoryHeader from "@components/ui/category-header";
import ProductGrid from "@components/ui/product-grid";
import ProductHorizontal from "@components/ui/product-horizontal";
import { useProducts } from "@data/use-products";
import React, { ReactElement } from "react";

interface Props {}

export default function HotArrivalsSection({}: Props): ReactElement {
  const { loading, products } = useProducts();
  return (
    <section className="my-5">
      <CategoryHeader title={"Hot Arrivals"} />
      <ProductHorizontal loading={loading} products={products?.slice(0, 8)} />
    </section>
  );
}

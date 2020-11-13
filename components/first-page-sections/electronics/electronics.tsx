import CategoryHeader from "@components/ui/category-header";
import ProductGrid from "@components/ui/product-grid";
import { useProducts } from "@data/use-products";
import React, { ReactElement } from "react";

interface Props {}

export default function ElectronicsSection({}: Props): ReactElement {
  const { loading, products } = useProducts();
  return (
    <section className="my-5">
      <CategoryHeader title={"Electronics"} />
      <ProductGrid loading={loading} products={products?.slice(0, 7)} />
    </section>
  );
}

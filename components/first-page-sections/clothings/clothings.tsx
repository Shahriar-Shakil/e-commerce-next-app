import CategoryHeader from "@components/ui/category-header";
import ProductGrid from "@components/ui/product-grid";
import { useProducts } from "@data/use-products";
import React, { ReactElement } from "react";

interface Props {}

export default function ClothingSection({}: Props): ReactElement {
  const { loading, products } = useProducts();
  const clothingsProduct = products?.filter(
    (item) =>
      item.category === "women clothing" || item.category === "men clothing"
  );
  return (
    <section className="my-5">
      <CategoryHeader title={"All"} />
      <ProductGrid loading={loading} products={clothingsProduct?.slice(0, 7)} />
    </section>
  );
}

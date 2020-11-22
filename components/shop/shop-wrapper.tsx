import ClothingSection from "@components/first-page-sections/clothings/clothings";
import Breadcrumb from "@components/ui/breadcrumb";
import ProductGrid from "@components/ui/product-grid";
import { useProducts } from "@data/use-products";
import { Button, PageHeader, Select, Space } from "antd";
import React, { ReactElement, useState, useEffect } from "react";
import Categories from "./categories";
import ProductFilter from "./productFilter";
import { MdGridOn } from "react-icons/md";
import { FaList } from "react-icons/fa";
import { useRecoilValue, useRecoilState } from "recoil";
import { categories, priceRangeAtom, productsStore } from "recoil/atoms";

interface Props {}

export default function ShopWrapper({}: Props): ReactElement {
  const { loading, products } = useProducts();
  const [allProducts, setAllProducts] = useRecoilState(productsStore);
  const currentCategory = useRecoilValue(categories);
  const priceRange = useRecoilValue(priceRangeAtom);
  useEffect(() => {
    setAllProducts(products);
  }, [products]);

  return (
    <div className="flex">
      <aside className="w-1/6 mr-5 flex-shrink-0">
        <Categories />
        <div className="mt-8">
          <ProductFilter />
        </div>
      </aside>
      <main className="flex-grow">
        <PageHeader
          className="bg-gray-200 my-2 py-2 px-1"
          backIcon={false}
          title={
            <h3 className="m-0 pl-3 font-bold capitalize">{currentCategory}</h3>
          }
          //   subTitle="This is a subtitle"
          extra={
            <Space className="grid grid-cols-2 lg:flex">
              <Select style={{ width: 200 }} defaultValue="1">
                <Select.Option value="1">Sort by poularity</Select.Option>
                <Select.Option value="2">Sort by latest</Select.Option>
                <Select.Option value="3">
                  Sort by price: low to high
                </Select.Option>
                <Select.Option value="4">
                  Sort by price: high to low
                </Select.Option>
              </Select>
              <span>
                <Button type="text" className="px-0">
                  <MdGridOn size="18" />
                </Button>
                <Button type="text">
                  <FaList size="18" className="px-0" />
                </Button>
              </span>
            </Space>
          }
        />
        <ProductGrid loading={loading} products={allProducts} />
      </main>
    </div>
  );
}

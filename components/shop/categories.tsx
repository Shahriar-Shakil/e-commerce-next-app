import { useProducts } from "@data/use-products";
import { Menu } from "antd";
import React, { ReactElement } from "react";
import { useSetRecoilState } from "recoil";
import { filterProductsByCategories } from "recoil/selectors";
interface Props {}

export default function Categories({}: Props): ReactElement {
  const { products } = useProducts();
  const filterByCategory = useSetRecoilState(filterProductsByCategories);
  const handleMenuClick = ({ key }) => {
    filterByCategory({ category: key, products: products });
  };
  const categoryList = products
    ?.map((item) => item.category)
    .filter(function (item, pos, self) {
      return self.indexOf(item) == pos;
    })
    .map((item) => {
      return (
        <Menu.Item key={item} className="capitalize m-0">
          {item}
        </Menu.Item>
      );
    });
  return (
    <div className="bg-light p-5">
      <p className="text-base">CATEGORIES</p>
      <Menu
        defaultSelectedKeys={["all"]}
        onClick={handleMenuClick}
        className="border-none bg-transparent"
      >
        <Menu.Item key="all">All Products</Menu.Item>
        {categoryList}
      </Menu>
    </div>
  );
}

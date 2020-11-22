import { useProducts } from "@data/use-products";
import { openNotificationWithIcon } from "@lib/notification-message";
import { Checkbox, Slider } from "antd";
import React, { ReactElement, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { priceRangeAtom } from "recoil/atoms";
import { filterProductsByPrice } from "recoil/selectors";
interface Props {}

export default function ProductFilter({}: Props): ReactElement {
  function onChange(checkedValues) {
    openNotificationWithIcon(
      "warning",
      "Opp! Something went wrong.",
      "This feature has been updated later!"
    );
    console.log("checked = ", checkedValues);
  }
  const setPriceRange = useSetRecoilState(filterProductsByPrice);
  const priceRange = useRecoilValue(priceRangeAtom);
  const { loading, products } = useProducts();

  const handlePriceRange = (value) => {
    setPriceRange({
      allProducts: products,
      max: value[1],
      min: value[0],
    });
  };
  return (
    <div className="bg-light p-5">
      <p className="text-base">BY BRANDS</p>
      <Checkbox onChange={onChange}>Apple</Checkbox> <br />
      <Checkbox onChange={onChange}>Microsoft</Checkbox> <br />
      <Checkbox onChange={onChange}>Yamaha</Checkbox>
      <br />
      <Checkbox onChange={onChange}>Asus</Checkbox>
      <br />
      <Checkbox onChange={onChange}>Samsung</Checkbox>
      <br />
      <Checkbox onChange={onChange}>LG Electronics</Checkbox>
      <br />
      <Checkbox onChange={onChange}>Gucci</Checkbox>
      <div className="">
        <p className="text-base my-5">BY PRICE</p>
        <Slider
          onChange={handlePriceRange}
          range
          max={1000}
          min={1}
          defaultValue={[1, 999]}
        ></Slider>
        <p className="text-gray-600">
          Price: ${priceRange.min} - ${priceRange.max}
        </p>
      </div>
    </div>
  );
}

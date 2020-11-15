import Footer from "@components/footer/footer";
import ShoppingCartTable from "@components/ui/shopping-cart-table";
import { Button, Card, Divider, Table } from "antd";
import Link from "next/link";
import React, { ReactElement } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useRecoilValue } from "recoil";
import { cartUpdate } from "recoil/selectors";
import TotalShopping from "./total-shopping";

interface Props {}

export default function Wrapper({}: Props): ReactElement {
  return (
    <section className="w-full">
      <div className="container mx-auto">
        <div className="my-3">
          <h1 className="text-center text-5xl mb-0 font-bold">Shopping Cart</h1>
        </div>
        <div>
          <ShoppingCartTable />
        </div>
        <div className="py-5">
          <Link href="/">
            <a className="hvr-underline-from-left text-gray-600 inline-flex items-center">
              <AiOutlineArrowLeft /> <span>Back to Shop</span>
            </a>
          </Link>
        </div>
        <TotalShopping />
        <Footer />
      </div>
    </section>
  );
}

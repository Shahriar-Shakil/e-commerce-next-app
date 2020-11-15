import Footer from "@components/footer/footer";
import Layout from "@components/layout/main";
import Wrapper from "@components/shopping-cart/wrapper";
import Breadcrumb from "@components/ui/breadcrumb";
import React, { ReactElement } from "react";

interface Props {}

export default function Cart({}: Props): ReactElement {
  return (
    <Layout className="p-0">
      <Breadcrumb />
      <Wrapper />
    </Layout>
  );
}

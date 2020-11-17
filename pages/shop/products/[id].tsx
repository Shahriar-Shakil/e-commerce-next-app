import Footer from "@components/footer/footer";
import Layout from "@components/layout/main";
import SingleProductView from "@components/product/product";
import Breadcrumb from "@components/ui/breadcrumb";
import React, { ReactElement } from "react";

interface Props {}

export default function Product({}: Props): ReactElement {
  return (
    <Layout className="p-0">
      {/* <Breadcrumb /> */}
      <div style={{ padding: "0 100px" }}>
        <SingleProductView />
        <Footer />
      </div>
    </Layout>
  );
}

import BannerCarousel from "@components/first-page-sections/banner/banner-carousel";
import Footer from "@components/footer/footer";
import Layout from "@components/layout/main";
import ShopWrapper from "@components/shop/shop-wrapper";
import Breadcrumb from "@components/ui/breadcrumb";
import React, { ReactElement } from "react";

interface Props {}

export default function Shop({}: Props): ReactElement {
  return (
    <Layout className="py-0">
      <Breadcrumb />
      <ShopWrapper />
      <Footer />
    </Layout>
  );
}

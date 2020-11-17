import Layout from "@components/layout/main";
import React, { ReactElement } from "react";
import Banner from "@components/first-page-sections/banner/banner";
import SiteFeatures from "@components/first-page-sections/site-features/site-features";
import DealOfDay from "@components/first-page-sections/deal-of-day/deal-of-day";
import HomeAd from "@components/first-page-sections/home-ad/home-ad";
import ClothingSection from "@components/first-page-sections/clothings/clothings";
import ElectronicsSection from "@components/first-page-sections/electronics/electronics";
import HotArrivalsSection from "@components/first-page-sections/hot-arrivals/hot-arrivals";
import Footer from "@components/footer/footer";
import { Divider } from "antd";

interface Props {}

function Home({}: Props): ReactElement {
  return (
    <>
      <Layout>
        {/* <Banner /> */}
        <SiteFeatures />
        <DealOfDay />
        <HomeAd />
        <ClothingSection />
        <ElectronicsSection />
        <HotArrivalsSection />

        <Footer />
      </Layout>
    </>
  );
}

export default Home;

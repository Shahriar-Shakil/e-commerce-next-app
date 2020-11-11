import BannerCarousel from "@components/banner/banner-carousel";
import Layout from "@components/layout/main";
import { Card, Typography } from "antd";
import React, { ReactElement } from "react";
import Image from "next/image";
import Banner from "@components/banner/banner";
import SiteFeatures from "@components/site-features/site-features";

const { Title } = Typography;
interface Props {}

function Home({}: Props): ReactElement {
  return (
    <Layout>
      <Banner />
      <SiteFeatures />
    </Layout>
  );
}

export default Home;

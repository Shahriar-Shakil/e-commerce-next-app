import Layout from "@components/layout/main";
import React, { ReactElement } from "react";
import Banner from "@components/banner/banner";
import SiteFeatures from "@components/site-features/site-features";
import DealOfDay from "@components/deal-of-day/deal-of-day";

interface Props {}

function Home({}: Props): ReactElement {
  return (
    <Layout>
      <Banner />
      <SiteFeatures />
      <DealOfDay />
    </Layout>
  );
}

export default Home;

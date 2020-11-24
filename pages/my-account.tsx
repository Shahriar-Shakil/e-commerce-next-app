import Account from "@components/account";
import Footer from "@components/footer/footer";
import Layout from "@components/layout/main";
import Breadcrumb from "@components/ui/breadcrumb";
import React, { ReactElement } from "react";

interface Props {}

export default function MyAccount({}: Props): ReactElement {
  return (
    <Layout className="bg-light">
      <Breadcrumb />
      <Account />
      <Footer />
    </Layout>
  );
}

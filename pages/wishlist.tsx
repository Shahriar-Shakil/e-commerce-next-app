import Layout from "@components/layout/main";
import Wrapper from "@components/shopping-cart/wrapper";
import Breadcrumb from "@components/ui/breadcrumb";
import WishlistTable from "@components/wishlist/wishlistTable";
import React, { ReactElement } from "react";

interface Props {}

export default function Cart({}: Props): ReactElement {
  return (
    <Layout className="p-0">
      <Breadcrumb />
      <WishlistTable />
    </Layout>
  );
}

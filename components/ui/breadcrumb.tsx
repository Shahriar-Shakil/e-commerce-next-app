import { Breadcrumb as AntBreadcrumb, Menu } from "antd";
import Link from "next/link";
import React, { ReactElement } from "react";
import { useRouter } from "next/router";

interface Props {}

const breadCrumbText = (text) => {
  if (text === "cart") {
    return "Shopping cart";
  }
};
export default function Breadcrumb({}: Props): ReactElement {
  const router = useRouter();
  var dirs = router.pathname.split("/");
  const item = dirs.map((item) => {
    if (item) {
      return (
        <AntBreadcrumb.Item>
          <Link href={`/${item}`}>
            <a>{breadCrumbText(item)}</a>
          </Link>
        </AntBreadcrumb.Item>
      );
    }
  });

  return (
    <AntBreadcrumb className="bg-gray-200 px-56 py-4">
      <AntBreadcrumb.Item>
        <Link href="/">
          <a>Home</a>
        </Link>
      </AntBreadcrumb.Item>
      {item}
    </AntBreadcrumb>
  );
}
const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        General
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        Layout
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        Navigation
      </a>
    </Menu.Item>
  </Menu>
);

import { Breadcrumb as AntBreadcrumb, Menu } from "antd";
import Link from "next/link";
import React, { ReactElement } from "react";
import { useRouter } from "next/router";

interface Props {}

const breadCrumbText = (text) => {
  if (text === "cart") {
    return "Shopping cart";
  } else return text.toUpperCase();
};
export default function Breadcrumb({}: Props): ReactElement {
  const router = useRouter();
  var dirs = router.pathname.split("/");
  const item = dirs.map((item) => {
    if (item) {
      return (
        <AntBreadcrumb.Item>
          <Link href={`/${item}`}>
            <a className="hover:text-blue-500">{breadCrumbText(item)}</a>
          </Link>
        </AntBreadcrumb.Item>
      );
    }
  });

  return (
    <AntBreadcrumb className=" px-2 py-4">
      <AntBreadcrumb.Item>
        <Link href="/">
          <a className="">HOME</a>
        </Link>
      </AntBreadcrumb.Item>
      {item}
    </AntBreadcrumb>
  );
}

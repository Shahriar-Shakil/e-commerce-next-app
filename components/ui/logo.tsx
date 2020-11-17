import { Typography } from "antd";
import Link from "next/link";
import React, { ReactElement } from "react";
const { Title } = Typography;
interface Props {}

export default function Logo({}: Props): ReactElement {
  return (
    <Link href="/">
      <a>
        <Title
          level="2"
          className="mb-0 lg:text-5xl"
          style={{ fontSize: "5vw" }}
        >
          mart<span className="text-white">next</span>
        </Title>
      </a>
    </Link>
  );
}

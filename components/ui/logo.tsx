import { Typography } from "antd";
import Link from "next/link";
import React, { ReactElement } from "react";
const { Title } = Typography;
interface Props {}

export default function Logo({}: Props): ReactElement {
  return (
    <Link href="/">
      <a>
        <Title level="2" className="mb-0">
          mart<span className="text-white">next</span>
        </Title>
      </a>
    </Link>
  );
}

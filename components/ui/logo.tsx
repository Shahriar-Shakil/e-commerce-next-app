import { Typography } from "antd";
import React, { ReactElement } from "react";
const { Title } = Typography;
interface Props {}

export default function Logo({}: Props): ReactElement {
  return (
    <Title level="2" className="mb-0">
      mart<span className="text-white">fury</span>
    </Title>
  );
}

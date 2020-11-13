import { Button, PageHeader, Space } from "antd";
import React, { ReactElement } from "react";

interface Props {
  title: string;
}

export default function CategoryHeader({ title }: Props): ReactElement {
  return (
    <PageHeader
      className="bg-gray-200 my-2 py-2 px-1"
      backIcon={false}
      title={<h3 className="m-0 pl-3 font-bold">{title}</h3>}
      //   subTitle="This is a subtitle"
      extra={
        <Space>
          <Button type="text" className="text-yellow-600">
            New Arivals
          </Button>
          <Button type="text">Best seller</Button>
          <Button type="text">Most Popular</Button>
          <Button type="text">View All</Button>
        </Space>
      }
    />
  );
}

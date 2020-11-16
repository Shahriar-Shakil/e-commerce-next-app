import React, { ReactElement } from "react";
import { Button, Input, Select } from "antd";

const { Option } = Select;

interface Props {}

export default function SearchBox({}: Props): ReactElement {
  return (
    <Input
      size="large"
      addonBefore={selectBefore}
      addonAfter={
        <Button size="large" className="bg-black text-white font-bold px-10">
          Search
        </Button>
      }
      placeholder="I'm shopping for..."
      defaultValue=""
    />
  );
}
const selectBefore = (
  <Select
    defaultValue="all"
    className="select-before "
    style={{ width: "100px" }}
    size="large"
  >
    <Option value="all">All</Option>
    <Option value="">All</Option>
    <Option value="">All</Option>
    <Option value="">All</Option>
  </Select>
);

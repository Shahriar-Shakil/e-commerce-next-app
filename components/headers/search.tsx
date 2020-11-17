import React, { ReactElement } from "react";
import { Button, Input, Select } from "antd";
import useWindowSize from "@lib/useWindowSize";
import { AiOutlineSearch } from "react-icons/ai";

const { Option } = Select;

interface Props {}

export default function SearchBox({}: Props): ReactElement {
  const { width } = useWindowSize();
  return (
    <Input
      className="m-2 lg:m-0"
      size="large"
      addonBefore={width < 600 ? null : selectBefore}
      addonAfter={
        <Button
          size="large"
          className="bg-black text-white font-bold sm:px-2 lg:px-10"
        >
          <span className="lg:block hidden">Search</span>
          <AiOutlineSearch className="lg:hidden" />
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

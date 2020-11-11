import React from "react";
import { AiOutlineBars } from "react-icons/ai";

import { Dropdown, Layout as AntLayout, Menu, Space } from "antd";
import SearchBox from "@components/headers/search";
import UserActionsGroup from "@components/headers/user-actions-group";
import DepartmentList from "@components/headers/department-list";

const { Header: AntHeader } = AntLayout;

interface Props {}

export default function FixedHeader({}: Props): ReactElement {
  return (
    <AntHeader
      className="bg-yellow-600 flex items-center py-2"
      style={{
        position: "fixed",
        zIndex: 1,
        width: "100%",
        padding: "0 100px",
        top: 0,
      }}
    >
      <DepartmentList />
      <div className="search flex-grow flex items-center px-10">
        <SearchBox />
      </div>
      <div className="actions flex items-center">
        <UserActionsGroup />
      </div>
    </AntHeader>
  );
}

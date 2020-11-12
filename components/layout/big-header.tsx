import React from "react";
import { AiOutlineBars, AiOutlineCaretDown } from "react-icons/ai";

import {
  Button,
  Divider,
  Dropdown,
  Layout as AntLayout,
  Menu,
  Space,
} from "antd";
import SearchBox from "@components/headers/search";
import UserActionsGroup from "@components/headers/user-actions-group";
import DepartmentList from "@components/headers/department-list";
import Logo from "@components/ui/logo";
import NavigationDropdown from "@components/headers/navigation-dropdown";

const { Header: AntHeader } = AntLayout;

interface Props {}

export default function BigHeader({}: Props): ReactElement {
  return (
    <AntHeader
      className="bg-yellow-400 "
      style={{
        position: "",
        zIndex: 1,
        width: "100%",
        padding: "0 0px",
        height: "auto",
      }}
    >
      <div className="flex items-center py-5 justify-between">
        <div className="w-1/2  flex  justify-center lg:w-1/5">
          <Logo />
        </div>
        {/* <DepartmentList /> */}
        <div className="search flex-1 flex items-center  hidden lg:flex">
          <SearchBox />
        </div>
        <div className="actions w-1/2  flex  justify-center lg:w-1/5">
          <UserActionsGroup />
        </div>
      </div>
      <Divider className="m-0" />
      <div className=" hidden lg:flex items-center small-header">
        <div className="w-1/5 text-center">
          <DepartmentList />
        </div>
        <div className="flex w-3/5 justify-between">
          <div className="left-nav">
            <NavigationDropdown />
          </div>
          <div className="right-nav">
            <NavigationDropdown />
          </div>
        </div>
      </div>
    </AntHeader>
  );
}

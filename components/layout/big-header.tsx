import React from "react";
import {
  AiOutlineBars,
  AiOutlineCaretDown,
  AiOutlineDown,
} from "react-icons/ai";

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
        padding: "0 100px",
        height: "auto",
      }}
    >
      <div className="flex items-center py-5 justify-between">
        <div className="w-1/2    lg:w-1/5">
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
      <hr className="full border-gray-800 my-0" />
      <div className=" hidden lg:flex items-center   small-header">
        <div className="w-1/5 ">
          <DepartmentList />
        </div>
        <div className="flex w-4/5 ">
          <div className="left-nav">
            <NavigationDropdown />
          </div>
          <div className="right-nav ml-auto">
            <a href="" className="text-black ">
              Sell on Martfurry
            </a>{" "}
            |{" "}
            <a href="" className="text-black ">
              Track your order
            </a>{" "}
            |{" "}
            <Dropdown overlay={CurrencyOpt} placement="bottomCenter">
              <a
                className="hvr-overline-from-left ant-dropdown-link inline-flex items-center text-black "
                onClick={(e) => e.preventDefault()}
              >
                <Space>
                  <span className="font-bold text-base ">USD</span>
                  <AiOutlineDown size="16" />
                </Space>
              </a>
            </Dropdown>
          </div>
        </div>
      </div>
    </AntHeader>
  );
}
const CurrencyOpt = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="">
        USD
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="">
        Euro
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="">
        GBP
      </a>
    </Menu.Item>
  </Menu>
);

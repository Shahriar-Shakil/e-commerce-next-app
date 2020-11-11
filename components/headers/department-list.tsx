import { Dropdown, Menu, Space } from "antd";
import React, { ReactElement } from "react";
import { AiOutlineBars } from "react-icons/ai";

interface Props {}

export default function DepartmentList({}: Props): ReactElement {
  return (
    <Dropdown overlay={menu} placement="bottomCenter">
      <a
        className="ant-dropdown-link inline-flex items-center text-black hover:text-white"
        onClick={(e) => e.preventDefault()}
      >
        <Space>
          <AiOutlineBars size="24" />
          <span className="font-bold text-base">Shop by Department</span>
        </Space>
      </a>
    </Dropdown>
  );
}
const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
    <Menu.Item danger>a danger item</Menu.Item>
  </Menu>
);

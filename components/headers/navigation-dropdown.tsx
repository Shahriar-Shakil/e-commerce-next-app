import { Dropdown, Menu, Space } from "antd";
import React, { ReactElement } from "react";
import { AiOutlineDown } from "react-icons/ai";

interface Props {}

export default function NavigationDropdown({}: Props): ReactElement {
  return (
    <Space>
      <Dropdown overlay={menu} placement="bottomLeft" arrow>
        <a href="" className="text-black  flex items-center ">
          Home
          <span className="px-1">
            <AiOutlineDown />
          </span>
        </a>
      </Dropdown>{" "}
      <Dropdown overlay={menu} placement="bottomLeft" arrow>
        <a href="" className="text-black  flex items-center ">
          Shop
          <span className="px-1">
            <AiOutlineDown />
          </span>
        </a>
      </Dropdown>{" "}
      <Dropdown overlay={menu} placement="bottomLeft" arrow>
        <a href="" className="text-black  flex items-center ">
          Pages
          <span className="px-1">
            <AiOutlineDown />
          </span>
        </a>
      </Dropdown>{" "}
      <Dropdown overlay={menu} placement="bottomLeft" arrow>
        <a href="" className="text-black  flex items-center ">
          Blog
          <span className="px-1">
            <AiOutlineDown />
          </span>
        </a>
      </Dropdown>{" "}
    </Space>
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
  </Menu>
);

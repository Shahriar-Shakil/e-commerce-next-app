import { Divider, Menu, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;
import React, { ReactElement } from "react";
import Link from "next/link";

interface Props {}

export default function AntMenuHorizontal({}: Props): ReactElement {
  return (
    <div>
      <Menu
        selectedKeys={[""]}
        mode="horizontal"
        className="bg-transparent border-none"
      >
        <SubMenu
          key="SubMenu"
          title={
            <Space>
              <span>Home</span>
              <DownOutlined />{" "}
            </Space>
          }
        >
          <Menu.ItemGroup>
            <Menu.Item key="homeAutoParts">
              <Link href="/">
                <a>Home Tech</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="homeAutoParts">
              <Link href="/">
                <a>Home Tech</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="homeAutoParts">
              <Link href="/">
                <a>Home Tech</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="homeAutoParts">
              <Link href="/">
                <a>Home Tech</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="homeAutoParts">
              <Link href="/">
                <a>Home Tech</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="homeAutoParts">
              <Link href="/">
                <a>Home Tech</a>
              </Link>
            </Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <SubMenu
          key="SubMenu2"
          title={
            <Space>
              <span>Shop</span>
              <DownOutlined />{" "}
            </Space>
          }
        >
          <Menu.ItemGroup title="Catalog Pages">
            <Menu.Item key="homeAutoParts">
              <Link href="/">
                <a>Shop Default</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="homeAutoPaarts">
              <Link href="/">
                <a>Shop Fullwidth</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="homeaAautoParts">
              <Link href="/">
                <a>Shop Categories</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="homeaAutaoParts">
              <Link href="/">
                <a>Shop Sidebar</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="homaeAutoPartsd">
              <Link href="/">
                <a>Shop Sidebar</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link href="/">
                <a>Home Tech</a>
              </Link>
            </Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Ecomerce  Pages">
            <Menu.Item key="homeAutoPartsProduct">
              <Link href="/">
                <a>Home Tech</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link href="/">
                <a>Home Tech</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link href="/">
                <a>Home Tech</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Link href="/">
                <a>Shopping Cart</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="6">
              <Link href="/">
                <a>Checkout</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="7">
              <Link href="/">
                <a>Wishlist</a>
              </Link>
            </Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Product Types">
            <Menu.Item key="8">
              <Link href="/">
                <a>Compare</a>
              </Link>
            </Menu.Item>

            <Menu.Item key="7">
              <Link href="/">
                <a>Order Tracking</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="a">
              <Link href="/">
                <a>My Account</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="s">
              <Link href="/">
                <a>Login /Register</a>
              </Link>
            </Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <SubMenu
          key="SubMenu3"
          title={
            <Space>
              <span>Pages</span>
              <DownOutlined />{" "}
            </Space>
          }
        >
          <Menu.ItemGroup title="Basic Pages">
            <Menu.Item key="d">
              <Link href="/">
                <a>About Us</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="f">
              <Link href="/">
                <a>Contact Us</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="g">
              <Link href="/">
                <a>404 Pages</a>
              </Link>
            </Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Vendor Pages">
            <Menu.Item key="h">
              <Link href="/">
                <a>Become a Vendor</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="j">
              <Link href="/">
                <a>Store List</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="k">
              <Link href="/">
                <a>Vendor Store </a>
              </Link>
            </Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <SubMenu
          key="SubMenu4"
          title={
            <Space>
              <span>Blogs</span>
              <DownOutlined />{" "}
            </Space>
          }
        >
          <Menu.ItemGroup title="Blog Layout">
            <Menu.Item key="c">
              <Link href="/">
                <a>Grid</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="v">
              <Link href="/">
                <a>Listing</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="b">
              <Link href="/">
                <a>Small Thumb</a>
              </Link>
            </Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Single Blog">
            <Menu.Item key="n">
              <Link href="/">
                <a>Single 1</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="m">
              <Link href="/">
                <a>Single 2</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="s,">
              <Link href="/">
                <a>Single 3 </a>
              </Link>
            </Menu.Item>
            <Menu.Item key=".d">
              <Link href="/">
                <a>Single 4 </a>
              </Link>
            </Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
      </Menu>
    </div>
  );
}

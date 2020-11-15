import CartDropdown from "@components/ui/cart-dropdown";
import { Badge, Dropdown, Menu, Space } from "antd";
import Link from "next/link";
import React, { ReactElement } from "react";
import {
  AiOutlineHeart,
  AiOutlineShopping,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { useRecoilValue } from "recoil";
import { cart } from "recoil/atoms";
import { cartUpdate } from "recoil/selectors";
import UserPlaceholder from "svgr/user-placeholder";

interface Props {}

export default function UserActionsGroup({}: Props): ReactElement {
  const cartState = useRecoilValue(cartUpdate);
  return (
    <Space size={20}>
      <Badge count={23} className="block hover:text-white">
        <AiOutlineHeart size="32" />
      </Badge>
      <Badge
        count={cartState.cartItems?.length ? cartState.cartItems?.length : null}
        className="block hover:text-white"
      >
        <Dropdown overlay={<CartDropdown />} placement="bottomCenter" arrow>
          <a
            className="hover:text-white ant-dropdown-link inline-flex items-center text-black "
            onClick={(e) => e.preventDefault()}
          >
            <AiOutlineShoppingCart size="32" />
          </a>
        </Dropdown>
      </Badge>
      <div className="flex items-center">
        <UserPlaceholder />
        <span>
          <Link href="">
            <a className="text-black font-bold hover:text-white">Login</a>
          </Link>{" "}
          |{" "}
          <Link href="">
            <a className="text-black font-bold hover:text-white">Register</a>
          </Link>
        </span>
      </div>
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
    <Menu.Item danger>a danger item</Menu.Item>
  </Menu>
);

import CartDropdown from "@components/ui/cart-dropdown";
import useUser from "@data/use-user";
import { logout } from "@lib/authenticate";
import { Badge, Button, Dropdown, Menu, Space } from "antd";
import Link from "next/link";
import React, { ReactElement } from "react";
import {
  AiOutlineHeart,
  AiOutlineShopping,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { useRecoilValue } from "recoil";
import { cart } from "recoil/atoms";
import { cartUpdate, wishListSelector } from "recoil/selectors";
import UserPlaceholder from "svgr/user-placeholder";
import { mutate } from "swr";

interface Props {}

export default function UserActionsGroup({}: Props): ReactElement {
  const cartState = useRecoilValue(cartUpdate);
  const wishListState = useRecoilValue(wishListSelector);
  const { user, mutateUser } = useUser();
  const handleLogout = () => {
    logout();
    mutateUser();
  };
  return (
    <Space size={20} className="float-right">
      <Badge
        count={wishListState?.wishlistTotal}
        className="block hover:text-white"
      >
        <Link href="/wishlist">
          <a className="text-black">
            <AiOutlineHeart size="32" />
          </a>
        </Link>
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
      <div className="hidden lg:flex items-center">
        <UserPlaceholder />
        {user ? (
          <>
            <Dropdown
              placement="bottomCenter"
              overlay={
                <Menu className="w-48">
                  <Menu.Item>
                    <Button
                      block
                      size="large"
                      className="border-none bg-black text-white"
                      onClick={handleLogout}
                    >
                      Logout
                    </Button>
                  </Menu.Item>
                </Menu>
              }
            >
              <a href="">{user?.name?.firstname}</a>
            </Dropdown>{" "}
          </>
        ) : (
          <>
            <span>
              <Link href="/my-account">
                <a className="text-black font-bold hover:text-white">Login</a>
              </Link>{" "}
              |{" "}
              <Link href="/my-account">
                <a className="text-black font-bold hover:text-white">
                  Register
                </a>
              </Link>
            </span>
          </>
        )}
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

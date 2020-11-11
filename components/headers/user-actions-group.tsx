import { Badge, Space } from "antd";
import Link from "next/link";
import React, { ReactElement } from "react";
import { AiOutlineHeart, AiOutlineShopping } from "react-icons/ai";
import UserPlaceholder from "svgr/user-placeholder";

interface Props {}

export default function UserActionsGroup({}: Props): ReactElement {
  return (
    <Space size={20}>
      <Badge count={23} className="block hover:text-white">
        <AiOutlineHeart size="32" />
      </Badge>
      <Badge count={23} className="block hover:text-white">
        <AiOutlineShopping size="32" />
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

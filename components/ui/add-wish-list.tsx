import { useProducts } from "@data/use-products";
import { openNotificationWithIcon } from "@lib/notification-message";
import { Button } from "antd";
import React, { ReactElement, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { useSetRecoilState } from "recoil";
import { wishlist } from "recoil/atoms";
import { addToWishList } from "recoil/selectors";

interface Props {
  itemToAdd: object;
  iconSize: string;
}

export default function AddWishList({ itemToAdd }: Props): ReactElement {
  const setWishList = useSetRecoilState(addToWishList);
  const handleAddWishList = () => {
    setWishList(itemToAdd);
  };

  return (
    <Button
      type="text"
      size="large"
      className=" text-gray-500 hover:bg-primary hover:text-white"
      shape="circle"
      onClick={handleAddWishList}
    >
      <AiOutlineHeart className="ml-7px" size="24" />
    </Button>
  );
}

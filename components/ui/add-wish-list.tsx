import { useProducts } from "@data/use-products";
import { openNotificationWithIcon } from "@lib/notification-message";
import { Button } from "antd";
import React, { ReactElement, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { useSetRecoilState } from "recoil";
import { wishlist } from "recoil/atoms";

interface Props {
  itemToAdd: object;
}

export default function AddWishList({ itemToAdd }: Props): ReactElement {
  const setWishList = useSetRecoilState(wishlist);
  const handleAddWishList = () => {
    setWishList((prev) => {
      const alreadyHave = prev.wishlistItems.some(
        (item) => item.id === itemToAdd.id
      );
      if (!alreadyHave) {
        openNotificationWithIcon("success", "successfully added on wishlist");
        return {
          ...prev,
          wishlistItems: [...prev.wishlistItems, itemToAdd],
        };
      }
      return {
        ...prev,
      };
    });
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

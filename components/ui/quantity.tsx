import { Button } from "antd";
import React, { ReactElement, useState, useEffect } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useRecoilState } from "recoil";
import { quantitySetter } from "recoil/atoms";

interface Props {
  // quantity: number;
  // setQuantity: any;
}

export default function Quantity({}: Props): ReactElement {
  const [quantity, setQuantity] = useRecoilState(quantitySetter);

  const handleIncrease = () => {
    if (quantity < 99) {
      setQuantity((prev) => prev + 1);
    }
  };
  const handleDecrease = () => {
    if (quantity) {
      setQuantity((prev) => prev - 1);
    }
  };
  return (
    <figure className="mb-0">
      <figcaption className="pb-1">Quantity</figcaption>
      <form className="flex items-center border p-2 w-32">
        <Button
          type="text"
          size="small"
          className="hover:bg-gray-200"
          onClick={handleDecrease}
        >
          <AiOutlineMinus size="16" />
        </Button>
        <span className="text-base text-center px-2 w-24">{quantity}</span>
        <Button
          type="text"
          size="small"
          className="hover:bg-gray-200"
          onClick={handleIncrease}
        >
          <AiOutlinePlus size="16" />
        </Button>
      </form>
    </figure>
  );
}

import { Button, Card, Divider } from "antd";
import React, { ReactElement } from "react";
import { useRecoilValue } from "recoil";
import { cartUpdate } from "recoil/selectors";

interface Props {}

export default function TotalShopping({}: Props): ReactElement {
  const cartState = useRecoilValue(cartUpdate);
  const items = cartState.cartItems.map((item) => {
    return (
      <div>
        <Divider className="" />
        <p>
          <span>{item.title}</span> x <span>{item.quantity}</span>
        </p>
      </div>
    );
  });
  return (
    <Card className="w-full lg:w-1/3 ml-auto mb-3 border-none">
      <div className="border">
        <div className="bg-gray-100 p-5">
          <div>
            <div className="flex justify-between">
              <p className="text-base">Subtotal</p>
              <p className="text-base">${cartState.amount}</p>
            </div>
            {items}
            <Divider />
            <div className="flex justify-between">
              <p className="text-3xl mb-0 font-bold">Total</p>
              <p className="text-3xl mb-0 font-bold text-danger">
                ${cartState.amount}
              </p>
            </div>
          </div>
        </div>
      </div>

      <Button
        className=" bg-primary hover:bg-black hover:text-white mt-5 font-bold rounded "
        size="large"
        block
      >
        Proceed to checkout
      </Button>
    </Card>
  );
}

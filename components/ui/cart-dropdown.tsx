import { Button, Divider } from "antd";
import Link from "next/link";
import Router from "next/router";
import React, { ReactElement } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { cart } from "recoil/atoms";
import { cartUpdate } from "recoil/selectors";

interface Props {}

export default function CartDropdown({}: Props): ReactElement {
  const cartState = useRecoilValue(cartUpdate);
  const setCartState = useSetRecoilState(cart);
  const handleClear = (id) => {
    setCartState((prev) => {
      const filterCartList = prev.cartItems.filter((item) => item.id !== id);
      return {
        ...prev,
        cartItems: [...filterCartList],
      };
    });
  };
  const items = cartState.cartItems.map((item) => {
    return (
      <div className="flex">
        <img src={item.image} alt={item.title} className="w-16 h-16 " />
        <div className="px-5 w-9/12 ml-auto ">
          <div className="flex justify-between">
            <Link href={`/shop/products/${item.id}`}>
              <a className="hover:text-primary">{item.title}</a>
            </Link>
            <Button type="text" onClick={() => handleClear(item.id)}>
              <AiOutlineClose />
            </Button>
          </div>
          <p className="mb-0 text-gray-500 my-2">
            <strong className="text-black">Sold by: </strong>Youngshop
          </p>
          <p>
            {item.quantity} x ${item.price}
          </p>
        </div>
      </div>
    );
  });
  return (
    <div className="bg-white p-4 shadow-md rounded" style={{ width: "370px" }}>
      {cartState.cartItems.length ? (
        <>
          {items}
          <div>
            <div className="flex items-center justify-between">
              <h2 className="mb-0 text-lg font-bold">Sub Total:</h2>
              <h2 className="mb-0 text-lg font-bold  text-danger">
                ${cartState.amount}
              </h2>
            </div>
            <div className="flex justify-between pt-3">
              <Button
                type="text"
                size="large"
                className="bg-primary text-gray-700 hover:bg-black hover:text-white text-base font-bold"
                onClick={() =>
                  Router.push("/cart").then(() => window.scrollTo(0, 0))
                }
              >
                View Cart
              </Button>
              <Button
                type="text"
                size="large"
                className="bg-primary text-gray-700 hover:bg-black hover:text-white text-base font-bold"
              >
                Checkout
              </Button>
            </div>
          </div>
        </>
      ) : (
        <div className="text-center">No products in cart</div>
      )}
    </div>
  );
}

import { Button, Table } from "antd";
import Item from "antd/lib/list/Item";
import Link from "next/link";
import React, { ReactElement } from "react";
import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { cart, updateQuantity } from "recoil/atoms";
import { cartUpdate } from "recoil/selectors";
import Quantity from "./quantity";

interface Props {}

export default function ShoppingCartTable({}: Props): ReactElement {
  const cartState = useRecoilValue(cartUpdate);
  const setCartState = useSetRecoilState(cart);
  const setQuantity = useSetRecoilState(updateQuantity);

  const handleIncrease = (id) => {
    setCartState((prev) => {
      return {
        ...prev,
        cartItems: cartState.cartItems.map((item) => {
          if (item.id === id) {
            if (item.quantity < 99) {
              return {
                ...item,
                quantity: item.quantity + 1,
              };
            }
            return {
              ...item,
            };
          }
          return {
            ...item,
          };
        }),
      };
    });
  };
  const handleDecrease = (id) => {
    setCartState((prev) => {
      return {
        ...prev,
        cartItems: cartState.cartItems.map((item) => {
          if (item.id === id) {
            if (item.quantity > 1) {
              return {
                ...item,
                quantity: item.quantity - 1,
              };
            }
            return { ...item };
          }
          return {
            ...item,
          };
        }),
      };
    });
  };
  const handleCancel = (id) => {
    setCartState((prev) => {
      const filterCartList = prev.cartItems.filter((item) => item.id !== id);
      return {
        ...prev,
        cartItems: [...filterCartList],
      };
    });
  };
  const columns = [
    {
      title: "PRODUCT",
      dataIndex: "",
      key: "product",
      width: "400px",
      className: "fixedWidth",
      // fixed: true,
      // responsive: ["xs"],
      render: (text, record) => {
        return (
          <div
            className="flex"
            // style={{ wordWrap: "break-word", wordBreak: "break-word" }}
          >
            <img src={record.image} alt={record.title} className="w-12" />
            <div className="px-8 max-w-lg w-32 flex-grow">
              <Link href="">
                <a>{record.title}</a>
              </Link>
              <p className="mb-0">
                <span>Sold By: </span> Robert's Store
              </p>
            </div>
          </div>
        );
      },
    },
    {
      title: "PRICE",
      dataIndex: "price",
      key: "price",
      render: (text, record) => <p>${record.price?.toFixed(2)}</p>,
    },
    {
      title: "QUANTITY",
      dataIndex: "",
      key: "quantity",
      render: (text, record) => {
        return (
          <form className="flex items-center border p-2 w-32">
            <Button
              type="text"
              size="small"
              className="hover:bg-gray-200"
              onClick={() => handleDecrease(record.id)}
            >
              <AiOutlineMinus size="16" />
            </Button>
            <span className="text-base text-center px-2 w-24">
              {record.quantity}
            </span>
            <Button
              type="text"
              size="small"
              className="hover:bg-gray-200"
              onClick={() => handleIncrease(record.id)}
            >
              <AiOutlinePlus size="16" />
            </Button>
          </form>
        );
      },
    },
    {
      title: "TOTAL",
      dataIndex: "",
      key: "total",
      width: "20%",
      render: (text, record) => {
        const total = record.quantity * record.price;
        return <p>${total.toFixed(2)}</p>;
      },
    },
    {
      title: "ACTION",
      dataIndex: "",
      key: "cancel",
      render: (text, record) => (
        <Button type="text" onClick={() => handleCancel(record.id)}>
          <AiOutlineClose size="20" />
        </Button>
      ),
    },
  ];
  return (
    <Table
      dataSource={cartState.cartItems}
      columns={columns}
      pagination={false}
      scroll={{ x: true }}
      // scroll={{ y: 500 }}
    />
  );
}

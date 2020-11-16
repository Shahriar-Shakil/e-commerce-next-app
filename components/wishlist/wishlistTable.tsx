import Footer from "@components/footer/footer";
import { openNotificationWithIcon } from "@lib/notification-message";
import { Button, Table, Tag } from "antd";
import Link from "next/link";
import React, { ReactElement } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { cart, wishlist, wishlistToCart } from "recoil/atoms";
import {
  addToCartSelector,
  cartUpdate,
  wishListSelector,
} from "recoil/selectors";

interface Props {}

export default function WishlistTable({}: Props): ReactElement {
  const [wishListState, setWishListState] = useRecoilState(wishlist);
  const setWislistToCartState = useSetRecoilState(addToCartSelector);
  const cartState = useRecoilValue(cart);
  const handleRemove = (id) => {
    setWishListState((prev) => {
      return {
        ...prev,
        wishlistItems: prev.wishlistItems.filter((item) => item.id !== id),
      };
    });
  };
  const handleAddToCart = (item) => {
    openNotificationWithIcon(
      "success",
      "This product has been added to your cart!"
    );
    setWislistToCartState(item);
  };
  const columns = [
    {
      title: "",
      width: "10%",
      key: "close",
      align: "center",
      render: (text, record) => (
        <Button type="text" onClick={() => handleRemove(record.id)}>
          <AiOutlineClose />
        </Button>
      ),
    },
    {
      title: "PRODUCT NAME",
      key: "product_name",
      render: (text, record) => {
        return (
          <div className="flex">
            <img src={record.image} alt={record.title} className="w-12" />
            <div className="px-8 max-w-lg w-32 flex-grow">
              <Link href="">
                <a>{record.title}</a>
              </Link>
            </div>
          </div>
        );
      },
    },
    {
      title: "UNIT PRICE",
      dataIndex: "price",
      key: "price",
      render: (text, record) => <p>${record.price?.toFixed(2)}</p>,
    },
    {
      title: "VENDOR",
      key: "price",
      render: (text, record) => <p className="mb-0">Robert's Store</p>,
    },
    {
      title: "",
      key: "price",
      render: (text, record) => {
        const alreadyInCart = cartState.cartItems.some(
          (item) => item.id === record.id
        );

        return (
          <>
            {alreadyInCart ? (
              <Tag color={"gold"}>In Cart</Tag>
            ) : (
              <Button
                type="text"
                size="large"
                className="bg-primary text-base text-black font-bold hover:bg-black hover:text-white"
                onClick={() => handleAddToCart(record)}
              >
                Add to cart
              </Button>
            )}
          </>
        );
      },
    },
  ];
  return (
    <section className="w-full">
      <div className="container mx-auto">
        <div className="my-3">
          <h1 className="text-center text-5xl mb-0 font-bold">Wishlist</h1>
        </div>
        <div>
          <Table
            pagination={false}
            columns={columns}
            dataSource={wishListState.wishlistItems}
          />
        </div>

        <Footer />
      </div>
    </section>
  );
}

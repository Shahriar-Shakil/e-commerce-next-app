import { useSingleProduct } from "@data/use-single-product";
import { openNotificationWithIcon } from "@lib/notification-message";
import { Button, Divider, Image, Rate, Skeleton, Space, Tooltip } from "antd";
import Modal from "antd/lib/modal/Modal";
import { PersistenceObserver } from "pages/_app";
import React, { ReactElement, useState } from "react";
import {
  AiFillEye,
  AiFillFacebook,
  AiFillGooglePlusSquare,
  AiFillPlaySquare,
  AiFillTwitterSquare,
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { cart, quantitySetter } from "recoil/atoms";
import LazyLoadImageComponent from "./LazyLoadImage";
import LazyLoadImage from "./LazyLoadImage";
import Quantity from "./quantity";

interface Props {
  quickView: {
    visibility: boolean;
    productId: number | string;
  };
  setQuickView: any;
}

export default function QuickView({
  quickView,
  setQuickView,
}: Props): ReactElement {
  const [quantity, setQuantity] = useRecoilState(quantitySetter);

  const { item, loading } = useSingleProduct(
    quickView.productId ? quickView.productId : null
  );
  const handleCloseModal = () => {
    setQuickView(() => ({ ...quickView, visibility: false }));
    setQuantity(1);
  };
  const setCart = useSetRecoilState(cart);

  const handleAddCart = () => {
    openNotificationWithIcon(
      "success",
      "This product has been added to your cart!"
    );
    if (quantity) {
      setCart((prev) => {
        const otherProducts = prev.cartItems.filter(
          (item) => item.id !== quickView.productId
        );
        const filterCartItem = prev.cartItems
          .filter((fitem, i, self) => fitem.id === quickView.productId)
          .map((item) => ({ ...item, quantity: item.quantity + quantity }));

        if (filterCartItem.length) {
          return {
            ...prev,
            cartItems: [...otherProducts, ...filterCartItem],
          };
        } else
          return {
            ...prev,
            cartItems: [...prev?.cartItems, { ...item, quantity: quantity }],
          };
      });
    }
  };

  return (
    <>
      <Modal
        title={item?.title}
        visible={quickView.visibility}
        footer={null}
        width={1024}
        onCancel={handleCloseModal}
      >
        <div className="flex items-start justify-between ">
          <div className="max-w-md flex-grow w-2/5">
            {/* <Image height={400} src={item?.image} /> */}
            <LazyLoadImageComponent
              image={{
                alt: "alt",
                height: "",
                width: "auto",
                src: item?.image,
              }}
            />
          </div>
          {loading ? (
            <Skeleton paragraph={{ rows: 20 }} />
          ) : (
            <div className="ml-5 w-3/5">
              <h3 className="text-xl text-black mb-0">{item?.title}</h3>
              <p className="text-gray-500 mb-0">
                Brand: <span className="text-blue-600"> Robart's Store </span>
                <span>
                  <Rate value={4}></Rate> <span>(1 review)</span>{" "}
                </span>
              </p>
              <Divider className="mt-0" />
              <p>
                <span className="text-red-700 text-2xl font-bold">
                  ${item?.price}
                </span>{" "}
                <span className="ml-1 text-gray-500">
                  <del>$679</del>
                </span>
              </p>
              <div>
                <p>
                  Sold By:{" "}
                  <span className="text-blue-600 text-base font-bold">
                    YOUNGSHOP
                  </span>
                </p>
                <ul className="list-disc text-gray-600 ">
                  <li> {item?.description}</li>
                  {/* <li> Free from the confines of wires and chords</li>
                <li> 20 hours of portable capabilities</li>
                <li>
                  {" "}
                  Double-ended Coil Cord with 3.5mm Stereo Plugs Included
                </li>
                <li> 3/4″ Dome Tweeters: 2X and 4″ Woofer: 1X</li> */}
                </ul>
                <Divider />
                <Space size={30} className="items-end">
                  <Quantity />
                  <Button
                    size="large"
                    className="bg-black border-none text-white px-5 font-bold text-lg hover:bg-primary"
                    onClick={handleAddCart}
                  >
                    Add to cart
                  </Button>
                  <Button
                    size="large"
                    className="bg-primary border-none text-black px-5 font-bold text-lg hover:bg-black hover:text-white"
                  >
                    Buy Now
                  </Button>
                </Space>
                <Divider />
                <div className="specification">
                  <a href="" className="text-gray-600">
                    <u>Report Abuse</u>
                  </a>
                  <p className="mb-0">
                    <strong>SKU: </strong> SF1133569600-1
                  </p>
                  <p className="mb-0">
                    <strong> Categories:</strong>
                    <a href="/shop" className="capitalize">
                      {" "}
                      {item?.category},
                    </a>
                    <a href="/shop"> Refrigerator,</a>
                    <a href="/shop"> Babies &amp; Moms</a>
                  </p>
                  <p className="tags">
                    <strong> Tags:</strong>
                    <a href="/shop"> sofa,</a>
                    <a href="/shop"> technologies,</a>
                    <a href="/shop"> wireless</a>
                  </p>
                </div>
                <div className="flex">
                  <a href="">
                    <AiFillFacebook size="48" className="text-blue-500" />
                  </a>
                  <a href="">
                    <AiFillTwitterSquare size="48" className="text-blue-400" />
                  </a>
                  <a href="">
                    <AiFillGooglePlusSquare
                      size="48"
                      className="text-red-400"
                    />
                  </a>
                  <a href="">
                    <AiFillPlaySquare size="48" className="text-red-800" />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </Modal>
    </>
  );
}

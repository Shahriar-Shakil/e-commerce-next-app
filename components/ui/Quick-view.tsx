import { useSingleProduct } from "@data/use-single-product";
import { Button, Divider, Image, Rate, Skeleton, Space, Tooltip } from "antd";
import Modal from "antd/lib/modal/Modal";
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
import LazyLoadImageComponent from "./LazyLoadImage";
import LazyLoadImage from "./LazyLoadImage";
import Quantity from "./quantity";

interface Props {
  productId: string;
}

export default function QuickView({ productId }: Props): ReactElement {
  const [quickView, setQuickView] = useState(false);
  const handleClick = () => [setQuickView(true)];
  console.log(productId, "id");
  const { item, loading } = useSingleProduct(quickView ? productId : null);
  return (
    <>
      <Button
        onClick={handleClick}
        type="text"
        size="large"
        className=" text-gray-500 hover:bg-yellow-500 hover:text-white"
        shape="circle"
      >
        <Tooltip title="Quick View" placement="bottomLeft">
          <AiFillEye className="ml-7px" size="24" />
        </Tooltip>
      </Button>
      <Modal
        title={item?.title}
        visible={quickView}
        footer={null}
        width={1024}
        onCancel={() => setQuickView(false)}
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
                    className="bg-black border-none text-white px-5 font-bold text-lg hover:bg-orange-400"
                  >
                    Add to cart
                  </Button>
                  <Button
                    size="large"
                    className="bg-orange-400 border-none text-black px-5 font-bold text-lg hover:bg-black hover:text-white"
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

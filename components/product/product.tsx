import LazyLoadImageComponent from "@components/ui/LazyLoadImage";
import Quantity from "@components/ui/quantity";
import { useSingleProduct } from "@data/use-single-product";
import { openNotificationWithIcon } from "@lib/notification-message";
import { Button, Divider, Rate, Skeleton, Space } from "antd";
import { useRouter } from "next/router";
import React, { ReactElement } from "react";
import {
  AiFillFacebook,
  AiFillGooglePlusSquare,
  AiFillPlaySquare,
  AiFillTwitterSquare,
  AiOutlineHeart,
} from "react-icons/ai";
import { useRecoilState, useSetRecoilState } from "recoil";
import { cart, quantitySetter } from "recoil/atoms";
import { addToCartSelector, addToWishList } from "recoil/selectors";

interface Props {}

export default function SingleProductView({}: Props): ReactElement {
  const router = useRouter();
  const { id } = router.query;
  const { item, loading } = useSingleProduct(id);
  console.log(id);
  const [quantity, setQuantity] = useRecoilState(quantitySetter);
  const addToCart = useSetRecoilState(addToCartSelector);
  const handleAddCart = () => {
    openNotificationWithIcon(
      "success",
      "This product has been added to your cart!"
    );
    addToCart(item);
    setQuantity(1);
  };
  const setWishList = useSetRecoilState(addToWishList);
  const handleAddWishList = () => {
    setWishList(item);
  };

  return (
    <div className="grid grid-cols-6 gap-5 my-8">
      <div className="flex items-start justify-between col-span-5">
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
                <Button
                  type="text"
                  size="large"
                  className=" text-gray-500  hover:bg-transparent"
                  onClick={handleAddWishList}
                >
                  <AiOutlineHeart className="ml-7px" size="32" />
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
                  <AiFillGooglePlusSquare size="48" className="text-red-400" />
                </a>
                <a href="">
                  <AiFillPlaySquare size="48" className="text-red-800" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

import React, { ReactElement } from "react";
import Head from "next/head";
import {
  Button,
  Card,
  Divider,
  Progress,
  Rate,
  Space,
  Statistic,
  Typography,
} from "antd";
import { AiFillEye, AiOutlineHeart, AiOutlineShopping } from "react-icons/ai";
import Slider from "react-slick";
import Link from "next/link";
import LazyLoadImageComponent from "./LazyLoadImage";

const { Title } = Typography;
interface Props {
  products: Array<any>;
  loading: boolean;
}

export default function ProductHorizontal({
  products,
  loading,
}: Props): ReactElement {
  const items = products?.map((item) => {
    return (
      <Card bordered={false} style={{ width: "auto" }} className="p-5">
        <div className="flex ">
          <Link href={`/shop/products/${item.id}`}>
            <a>
              <LazyLoadImageComponent
                className="horizontal-card-img "
                image={{
                  alt: "alt",
                  height: "",
                  width: "auto",
                  src: item?.image,
                }}
              />
            </a>
          </Link>

          <div className="w-56">
            <Link href={`/shop/products/${item.id}`}>
              <a
                className="hover:text-yellow-500  line-clamp-2"
                title={item.title}
              >
                {item.title}
              </a>
            </Link>
            <br />
            <div>
              <Rate disabled defaultValue={4} />{" "}
              <span className="text-gray-700 ml-1">4</span>
              <p className="text-base font-bold m-0">
                <span className="text-green-700">$32.99</span>{" "}
              </p>
            </div>
          </div>
        </div>
      </Card>
    );
  });
  return <div className="grid grid-cols-4 ">{items}</div>;
}

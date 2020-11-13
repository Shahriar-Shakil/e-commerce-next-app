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
  Tooltip,
  Typography,
} from "antd";
import { AiFillEye, AiOutlineHeart, AiOutlineShopping } from "react-icons/ai";
import Slider from "react-slick";
import Link from "next/link";
import QuickView from "./Quick-view";
import LazyLoadImageComponent from "./LazyLoadImage";

const { Title } = Typography;
interface Props {
  products: Array<any>;
  loading: boolean;
}

export default function ProductGrid({
  products,
  loading,
}: Props): ReactElement {
  const items = products?.map((item) => {
    return (
      <Card
        bordered={false}
        style={{ width: "auto" }}
        cover={
          <>
            <LazyLoadImageComponent
              className="grid-layout-img"
              image={{
                alt: "alt",
                height: 250,
                width: "auto",
                src: item?.image,
              }}
            />
            {/* <img
              className="products-img"
              alt={item.category}
              src={item.image}
            /> */}
            <div className="product-actions">
              <Space size="large">
                <Button
                  type="text"
                  size="large"
                  className=" text-gray-500 hover:bg-yellow-500 hover:text-white"
                  shape="circle"
                >
                  <AiOutlineHeart className="ml-7px" size="24" />
                </Button>
                <QuickView productId={item.id} />
                <Button
                  type="text"
                  size="large"
                  className=" text-gray-500
                       hover:text-white
                       hover:bg-yellow-500"
                  shape="circle"
                >
                  <AiOutlineShopping className="ml-7px" size="24" />
                </Button>
              </Space>
            </div>
          </>
        }
        className="p-5"
      >
        <div className="details py-3">
          <p className="m-0">Young Shp</p>
          <Divider className="m-1"></Divider>
          <p className="text-base font-bold m-0">
            <span className="text-green-500">${item?.price}</span>{" "}
            <del className=" text-sm text-gray-500">$41.00</del>{" "}
            <span className="pl-3 text-red-500">18% off</span>
          </p>
          <Link href="">
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
          </div>

          <Progress percent={70} showInfo={false} />
          <p className="text-gray-700 m-0">Sold:22</p>
        </div>
      </Card>
    );
  });
  return <div className="grid grid-cols-7 ">{items}</div>;
}

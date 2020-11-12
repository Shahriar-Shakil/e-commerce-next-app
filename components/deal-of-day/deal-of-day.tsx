import React, { ReactElement } from "react";
import Head from "next/head";
import { useProducts } from "@data/use-products";
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
import { Avatar } from "antd";
import Slider from "react-slick";
import Link from "next/link";
const { Title } = Typography;
interface Props {}

export default function DealOfDay({}: Props): ReactElement {
  const { loading, products } = useProducts();
  const catagories = products?.map((item) => item.category);
  const { Countdown } = Statistic;
  const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK
  function onFinish() {
    console.log("finished!");
  }
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 3,
    arrows: true,
    className: "myCustomCarousel",
  };
  const items = products?.map((item) => {
    return (
      <Card
        bordered={false}
        style={{ width: 300 }}
        cover={
          <>
            <img
              className="products-img"
              alt={item.category}
              src={item.image}
            />
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
                <Button
                  type="text"
                  size="large"
                  className=" text-gray-500 hover:bg-yellow-500 hover:text-white"
                  shape="circle"
                >
                  <AiFillEye className="ml-7px" size="24" />
                </Button>
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
            <span className="text-green-500">$32.99</span>{" "}
            <del className=" text-sm text-gray-500">$41.00</del>{" "}
            <span className="pl-3 text-red-500">18% off</span>
          </p>
          <Link href="">
            <a className="hover:text-yellow-500">
              Sound Intone I65 Earphone White Version
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
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <section className="">
        <div className="flex justify-between items-center">
          <Space size={30}>
            <Title level={3} className="font-thin m-0">
              Deal of the Day
            </Title>
            <Countdown title="End in:" value={deadline} onFinish={onFinish} />
          </Space>
          <Button
            type="text"
            className="  border-black border-t-0 border-r-0  border-l-0  border-b-1 rounded-none hover:text-yellow-500 bg-transparent"
          >
            View all
          </Button>
        </div>

        <Divider className="my-2 mb-10"></Divider>
        <div>
          <Slider {...settings}>{items}</Slider>
        </div>
      </section>
    </>
  );
}

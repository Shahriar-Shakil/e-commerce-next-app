import React, { ReactElement, useState } from "react";
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
// import QuickView from "./Quick-view";
import LazyLoadImageComponent from "./LazyLoadImage";
import QuickView from "./Quick-view";
import AddWishList from "./add-wish-list";

const { Title } = Typography;
interface Props {
  products: Array<any>;
  loading: boolean;
}

export default function ProductsSlider({
  products,
  loading,
}: Props): ReactElement {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 3,
    arrows: true,
    className: "myCustomCarousel",
  };
  const [quickView, setQuickView] = useState({
    visibility: false,
    productId: "",
  });
  const handleQuickView = (id) =>
    setQuickView({ visibility: true, productId: id });
  const items = products?.map((item) => {
    return (
      <Card
        bordered={false}
        style={{ width: 300 }}
        cover={
          <>
            <Link href={`/shop/products/${item.id}`}>
              <a>
                <LazyLoadImageComponent
                  className="grid-layout-img"
                  image={{
                    alt: "alt",
                    height: 250,
                    width: "auto",
                    src: item?.image,
                  }}
                />
              </a>
            </Link>

            <div className="product-actions">
              <Space size="large">
                <AddWishList itemToAdd={item} />
                <Button
                  onClick={() => handleQuickView(item.id)}
                  type="text"
                  size="large"
                  className=" text-gray-500 hover:bg-primary hover:text-white"
                  shape="circle"
                >
                  <Tooltip title="Quick View" placement="bottomLeft">
                    <AiFillEye className="ml-7px" size="24" />
                  </Tooltip>
                </Button>
                <Button
                  type="text"
                  size="large"
                  className=" text-gray-500
                       hover:text-white
                       hover:bg-primary"
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
          </div>

          <Progress percent={70} showInfo={false} />
          <p className="text-gray-700 m-0">Sold:22</p>
        </div>
      </Card>
    );
  });
  return (
    <>
      {" "}
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
      </Head>{" "}
      <Slider {...settings}>{items}</Slider>
      <QuickView quickView={quickView} setQuickView={setQuickView} />
    </>
  );
}

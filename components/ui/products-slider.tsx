import React, { ReactElement, useState } from "react";
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
import Link from "next/link";
// import QuickView from "./Quick-view";
import LazyLoadImageComponent from "./LazyLoadImage";
import QuickView from "./Quick-view";
import AddWishList from "./add-wish-list";
import useReactMatchMedia from "react-simple-matchmedia";
import SlickSlider from "./slick-slider";
import { openNotificationWithIcon } from "@lib/notification-message";
import { useSetRecoilState } from "recoil";
import { addToCartSelector } from "recoil/selectors";

const { Title } = Typography;
interface Props {
  products: Array<any>;
  loading: boolean;
}

export default function ProductsSlider({
  products,
  loading,
}: Props): ReactElement {
  const matchPhone = useReactMatchMedia("phone");
  const addToCart = useSetRecoilState(addToCartSelector);

  var settings = {
    dots: matchPhone ? true : false,
    infinite: true,
    speed: 500,
    slidesToShow: matchPhone ? 2 : 7,
    slidesToScroll: 3,
    arrows: matchPhone ? false : true,
    className: "myCustomCarousel",
  };
  const [quickView, setQuickView] = useState({
    visibility: false,
    productId: "",
  });
  const handleQuickView = (id) =>
    setQuickView({ visibility: true, productId: id });
  const handleAddToCart = (item) => {
    console.log("working");
    openNotificationWithIcon(
      "success",
      "This product has been added to your cart!"
    );
    addToCart(item);
  };
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
                  onClick={() => handleAddToCart(item)}
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
      <SlickSlider settings={settings}>{items}</SlickSlider>
      <QuickView quickView={quickView} setQuickView={setQuickView} />
    </>
  );
}

import React, { ReactElement } from "react";
import Image from "next/image";
import { Carousel } from "antd";
import SlickSlider from "@components/ui/slick-slider";
// import useReactMatchMedia from "react-simple-matchmedia";

interface Props {}

export default function BannerCarousel({}: Props): ReactElement {
  // const matchPhone = useReactMatchMedia("phone");
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    className: "myCustomCarousel",
  };
  return (
    <SlickSlider settings={settings}>
      <div>
        <img src="/assets/banner-img/slide-1.jpg" alt="Picture of the author" />
      </div>
      <div>
        <img src="/assets/banner-img/slide-2.jpg" />
      </div>
      <div>
        <img src="/assets/banner-img/slide-3.jpg" />
      </div>
    </SlickSlider>
  );
}

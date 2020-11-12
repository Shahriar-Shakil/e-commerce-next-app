import React, { ReactElement } from "react";
import Image from "next/image";
import { Carousel } from "antd";

interface Props {}

export default function BannerCarousel({}: Props): ReactElement {
  return (
    <Carousel>
      <div>
        <img src="/assets/banner-img/slide-1.jpg" alt="Picture of the author" />
      </div>
      <div>
        <img src="/assets/banner-img/slide-2.jpg" />
      </div>
      <div>
        <img src="/assets/banner-img/slide-3.jpg" />
      </div>
    </Carousel>
  );
}

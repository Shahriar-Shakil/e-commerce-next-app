import React, { ReactElement } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

interface Props {}

export default function BannerCarousel({}: Props): ReactElement {
  return (
    <Carousel autoPlay>
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

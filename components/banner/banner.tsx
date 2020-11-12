import React, { ReactElement } from "react";
import BannerCarousel from "./banner-carousel";

interface Props {}

export default function Banner({}: Props): ReactElement {
  return (
    <div className="grid grid-cols-4 gap-5 ">
      <div className="col-span-4 row-span-2 lg:col-span-3">
        <BannerCarousel />
      </div>
      <div className="md:col-span-2 lg:col-span-1">
        <img src="/assets/banner-img/promotion-1.jpg" alt="slider" />
      </div>
      <div className="md:col-span-2 lg:col-span-1">
        {" "}
        <img src="/assets/banner-img/promotion-2.jpg" alt="slider" />
      </div>
    </div>
  );
}

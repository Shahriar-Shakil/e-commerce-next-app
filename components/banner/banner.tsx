import React, { ReactElement } from "react";
import BannerCarousel from "./banner-carousel";

interface Props {}

export default function Banner({}: Props): ReactElement {
  return (
    <div className="grid grid-cols-4 gap-5 ">
      <div className="col-span-3 row-span-2">
        <BannerCarousel />
      </div>
      <div>
        <img src="/assets/banner-img/promotion-1.jpg" alt="slider" />
      </div>
      <div>
        {" "}
        <img src="/assets/banner-img/promotion-2.jpg" alt="slider" />
      </div>
    </div>
  );
}

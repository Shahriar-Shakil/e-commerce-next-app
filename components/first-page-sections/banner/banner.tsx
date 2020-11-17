import LazyLoadImageComponent from "@components/ui/LazyLoadImage";
import React, { ReactElement } from "react";
import BannerCarousel from "./banner-carousel";

interface Props {}

export default function Banner({}: Props): ReactElement {
  return (
    <div className="grid gap-3 grid-cols-2  lg:grid lg:grid-cols-4 ">
      <div className="col-span-4 row-span-2 lg:col-span-3 sm:col-span-2">
        <BannerCarousel />
      </div>
      <div className="md:col-span-2 lg:col-span-1">
        <LazyLoadImageComponent
          className=" "
          image={{
            alt: "alt",
            height: "",
            width: "auto",
            src: "/assets/banner-img/promotion-1.jpg",
          }}
        />
      </div>
      <div className="md:col-span-2 lg:col-span-1">
        <LazyLoadImageComponent
          className=" "
          image={{
            alt: "alt",
            height: "",
            width: "auto",
            src: "/assets/banner-img/promotion-2.jpg",
          }}
        />{" "}
      </div>
    </div>
  );
}

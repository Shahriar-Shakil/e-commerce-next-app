import LazyLoadImageComponent from "@components/ui/LazyLoadImage";
import React, { ReactElement } from "react";

interface Props {}

export default function HomeAd({}: Props): ReactElement {
  return (
    <div className="grid grid-cols-1 mt-10 lg:grid-cols-3 gap-3 lg:gap-8">
      <LazyLoadImageComponent
        className=" "
        image={{
          alt: "alt",
          height: "",
          width: "auto",
          src: "/assets/home-ads/1.jpg",
        }}
      />
      <LazyLoadImageComponent
        className=" "
        image={{
          alt: "alt",
          height: "",
          width: "auto",
          src: "/assets/home-ads/2.jpg",
        }}
      />
      <LazyLoadImageComponent
        className=" "
        image={{
          alt: "alt",
          height: "",
          width: "auto",
          src: "/assets/home-ads/3.jpg",
        }}
      />
    </div>
  );
}

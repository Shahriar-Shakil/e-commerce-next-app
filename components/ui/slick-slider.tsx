import React, { ReactElement } from "react";
import Slider from "react-slick";
import Link from "next/link";
import Head from "next/head";
interface Props {
  children: any;
  settings: any;
}

export default function SlickSlider({
  children,
  settings,
}: Props): ReactElement {
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
      </Head>{" "}
      <Slider {...settings}>{children}</Slider>
    </>
  );
}

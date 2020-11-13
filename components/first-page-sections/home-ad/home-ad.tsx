import React, { ReactElement } from "react";

interface Props {}

export default function HomeAd({}: Props): ReactElement {
  return (
    <div className="grid grid-cols-3 gap-8">
      <img src="/assets/home-ads/1.jpg" alt="ad" />
      <img src="/assets/home-ads/2.jpg" alt="ad" />
      <img src="/assets/home-ads/3.jpg" alt="ad" />
    </div>
  );
}

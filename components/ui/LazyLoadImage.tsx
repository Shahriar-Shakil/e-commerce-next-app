import { type } from "os";
import React, { ReactElement } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
interface Props {
  image: {
    alt: string;
    height: number | string;
    src: string;
    width: number | string;
  };
  className: string;
}

export default function LazyLoadImageComponent({
  image,
  className,
}: Props): ReactElement {
  return (
    <div>
      <LazyLoadImage
        wrapperClassName={className}
        alt={image.alt}
        height={image.height}
        src={image.src} // use normal <img> attributes as props
        width={image.width}
        effect="blur"
      />
    </div>
  );
}

import { Space } from "antd";
import React, { ReactElement } from "react";

interface Props {}

export default function CopyRight({}: Props): ReactElement {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between py-5">
      <p className="m-0">© 2020 Martfury. All Rights Reserved</p>
      <p className="m-0  flex items-center pt-3 lg:pt-0">
        <span className="pr-4">We Using Safe Payment For:</span>
        <Space size="large">
          <a href="">
            <img src="/assets/payment/1.jpg" alt="wu" />
          </a>
          <a href="">
            <img src="/assets/payment/2.jpg" alt="wu" />
          </a>
          <a href="" className="hidden lg:inline">
            <img src="/assets/payment/3.jpg" alt="wu" />
          </a>
          <a href="" className="hidden lg:inline">
            <img src="/assets/payment/4.jpg" alt="wu" />
          </a>
          <a href="" className="hidden lg:inline">
            <img src="/assets/payment/5.jpg" alt="wu" />
          </a>
        </Space>
      </p>
    </div>
  );
}

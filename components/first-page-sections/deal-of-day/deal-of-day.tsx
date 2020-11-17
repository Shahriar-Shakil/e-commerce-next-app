import React, { ReactElement } from "react";
import { useProducts } from "@data/use-products";
import { Button, Divider, Space, Statistic, Typography } from "antd";
import ProductsSlider from "@components/ui/products-slider";
const { Title } = Typography;
interface Props {}

export default function DealOfDay({}: Props): ReactElement {
  const { loading, products } = useProducts();
  const { Countdown } = Statistic;
  const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK
  function onFinish() {
    console.log("finished!");
  }

  return (
    <>
      <section className="">
        <div className="flex justify-between lg:justify-between items-center">
          <Space size={30} className="inline-flex">
            <Title level={3} className="font-thin m-0 text-base lg:text-xl">
              Deal of the Day
            </Title>
            <Countdown title="End in:" value={deadline} onFinish={onFinish} />
          </Space>
          <Button
            type="text"
            className="  border-black border-t-0 border-r-0  border-l-0  border-b-1 rounded-none hover:text-yellow-500 bg-transparent"
          >
            View all
          </Button>
        </div>

        <Divider className="my-2 mb-10"></Divider>
        <div>
          <ProductsSlider loading={loading} products={products} />
        </div>
      </section>
    </>
  );
}

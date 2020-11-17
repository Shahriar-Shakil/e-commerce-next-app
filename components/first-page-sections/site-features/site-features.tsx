import React, { ReactElement } from "react";
import { VscRocket } from "react-icons/vsc";
import {
  AiOutlineCreditCard,
  AiOutlineGift,
  AiOutlineSync,
} from "react-icons/ai";
import { ImBubbles3 } from "react-icons/im";
interface Props {}

export default function SiteFeatures({}: Props): ReactElement {
  return (
    <div className="site-features border my-5  lg:px-10">
      <div className="grid grid-cols-3 lg:flex py-4">
        <div className="item lg:border-r lg:pr-10">
          <div className="flex flex-col lg:flex-row  p-2 items-center">
            <div className=" lg:block-left text-primary pb-4 lg:pb-0">
              <VscRocket size="46" />
            </div>
            <div className="block-right pl-10 font-16">
              <h2 className="text-lg text-black font-bold m-0">
                Free Delivery
              </h2>
              <p className="m-0">For all oders over $99</p>
            </div>
          </div>
        </div>
        <div className="item  lg:border-r lg:px-10">
          <div className="flex flex-col lg:flex-row  p-2 items-center">
            <div className="block-left text-primary pb-4 lg:pb-0">
              <AiOutlineSync size="46" />
            </div>
            <div className="block-right pl-10 font-16">
              <h2 className="text-lg text-black font-bold m-0">
                90 Days Return
              </h2>
              <p className="m-0">If goods have problems</p>
            </div>
          </div>
        </div>
        <div className="item  lg:border-r lg:px-10">
          <div className="flex flex-col lg:flex-row p-2 items-center">
            <div className="block-left text-primary pb-4 lg:pb-0">
              <AiOutlineCreditCard size="46" />
            </div>
            <div className="block-right pl-10 font-16">
              <h2 className="text-lg text-black font-bold m-0">
                Secure Payment
              </h2>
              <p className="m-0">100% secure payment</p>
            </div>
          </div>
        </div>
        <div className="item   lg:border-r lg:px-10">
          <div className="flex flex-col lg:flex-row p-2 items-center">
            <div className="block-left text-primary pb-4 lg:pb-0">
              <ImBubbles3 size="46" />
            </div>
            <div className="block-right pl-10 font-16">
              <h2 className="text-lg text-black font-bold m-0">
                24/7 Support{" "}
              </h2>
              <p className="m-0">24/7 Support</p>
            </div>
          </div>
        </div>
        <div className="item  lg:pl-10">
          <div className="flex flex-col lg:flex-row p-2 items-center">
            <div className="block-left text-primary pb-4 lg:pb-0">
              <AiOutlineGift size="46" />
            </div>
            <div className="block-right pl-10 font-16">
              <h2 className="text-lg text-black font-bold m-0">
                Gift Service{" "}
              </h2>
              <p className="m-0">For all oders over $99</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

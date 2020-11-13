import { Space } from "antd";
import React, { ReactElement } from "react";
import {
  AiOutlineFacebook,
  AiOutlineGooglePlus,
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlineTwitter,
} from "react-icons/ai";

interface Props {}

export default function Contacts({}: Props): ReactElement {
  return (
    <div className="grid grid-cols-5 gap-8">
      <div className="col-span-2   w-64">
        <div className="py-5">
          <h4 className="font-bold text-base m-0">Contacts us</h4>
        </div>
        <div className="">
          <p className="m-0 text-gray-500">Call us 24/7</p>
          <h3 className="my-4 font-bold text-2xl text-yellow-600">
            1800 97 97 69
          </h3>
          <p>502 New Design Str, Melbourne, Australia contact@martfury.co</p>
          <Space size={"large"} className="pt-8">
            <a href="" className="text-blue-500">
              <AiOutlineFacebook size={24} />
            </a>
            <a href="" className="text-indigo-600">
              <AiOutlineTwitter size={24} />
            </a>
            <a href="" className="text-red-400">
              <AiOutlineInstagram size={24} />
            </a>
            <a href="" className="text-red-700">
              <AiOutlineGooglePlus size={24} />
            </a>
          </Space>
        </div>
      </div>
      {/* quick links */}
      <div>
        <div className="py-5">
          <h4 className="font-bold text-base m-0">Quick links</h4>
        </div>
        <div className="contacts-list">
          <ul>
            <li>
              <a href="" className="hvr-underline-from-left">
                Policy
              </a>
            </li>
            <li>
              <a href="" className="hvr-underline-from-left">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="" className="hvr-underline-from-left">
                Shipping
              </a>
            </li>
            <li>
              <a href="" className="hvr-underline-from-left">
                Return
              </a>
            </li>
            <li>
              <a href="" className="hvr-underline-from-left">
                FAQs
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Company */}
      <div>
        <div className="py-5">
          <h4 className="font-bold text-base m-0">Company</h4>
        </div>
        <div className="contacts-list">
          <ul>
            <li>
              <a href="" className="hvr-underline-from-left">
                About us
              </a>
            </li>
            <li>
              <a href="" className="hvr-underline-from-left">
                Affiliate
              </a>
            </li>
            <li>
              <a href="" className="hvr-underline-from-left">
                Career
              </a>
            </li>
            <li>
              <a href="" className="hvr-underline-from-left">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Business */}
      <div>
        <div className="py-5">
          <h4 className="font-bold text-base m-0">Business</h4>
        </div>
        <div className="contacts-list">
          <ul>
            <li>
              <a href="" className="hvr-underline-from-left">
                Our Press
              </a>
            </li>
            <li>
              <a href="" className="hvr-underline-from-left">
                Checkout
              </a>
            </li>
            <li>
              <a href="" className="hvr-underline-from-left">
                My account
              </a>
            </li>
            <li>
              <a href="" className="hvr-underline-from-left">
                Shop
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

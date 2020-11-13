import { Divider } from "antd";
import React, { ReactElement } from "react";
import Contacts from "./contacts/contacts";
import CopyRight from "./copy-right/copy-right";

interface Props {}

export default function Footer({}: Props): ReactElement {
  return (
    <footer>
      <hr className="full" />
      <Contacts />
      <hr className="my-5" />
      <CopyRight />
    </footer>
  );
}
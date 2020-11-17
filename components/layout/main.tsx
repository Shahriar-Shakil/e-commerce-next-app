import React, { useEffect, useState } from "react";

import { Layout as AntLayout, Menu, Breadcrumb } from "antd";
import FixedHeader from "./header";
import { Scrollbar } from "@components/ui/scrollbar";
import BigHeader from "./big-header";
import useWindowPosition from "@lib/useWindowPosition";
import useReactMatchMedia from "react-simple-matchmedia";

const { Content, Footer } = AntLayout;

interface Props {
  children: any;
  className?: string;
}

export default function Layout({ children, className }: Props): ReactElement {
  const matchPhone = useReactMatchMedia("phone");
  const scrollPosition = useWindowPosition();
  const [fixedHeader, setFixedHeader] = useState(false);
  useEffect(() => {
    if (scrollPosition > 250 && !matchPhone) {
      setFixedHeader(true);
    } else if (scrollPosition === 0) {
      setFixedHeader(false);
    }
  }, [scrollPosition]);
  return (
    <AntLayout>
      {/* <Scrollbar> */}
      {fixedHeader ? <FixedHeader /> : <BigHeader />}

      <Content
        className={`bg-white ${className} px-4 lg:px-24`}
        // style={{ padding: "0 100px", marginTop: 64 }}
        style={{
          padding: "0 100px",
          // maxHeight: "calc(100vh - 65px)",
          marginTop: fixedHeader ? 65 : 0,
        }}
      >
        <div className={className} style={{ padding: "24px 0" }}>
          {children}
        </div>
      </Content>
      {/* </Scrollbar> */}
    </AntLayout>
  );
}

import React from "react";
import { Layout as LayoutAntd } from "antd";

import Header from "../header/index";
import { Footer } from "../footer/index";

const { Content } = LayoutAntd;

export const Layout = ({ children }) => (
  <LayoutAntd>
    <Header />
    <Content>{children}</Content>
    <Footer />
  </LayoutAntd>
);

import React from "react";
import { Layout } from "antd";

export const Footer = () => (
  <Layout.Footer>
    <p className="footer-text">
      Автор:{" "}
      <a href="mailto: sergeykozlov.2011@yandex.ru" className="mailto">
        sergeykozlov.2011@yandex.ru
      </a>
    </p>
  </Layout.Footer>
);

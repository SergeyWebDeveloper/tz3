import React from "react";
import { Button as ButtonAntd } from "antd";

export const Button = ({ label, type, children, ...props }) => (
  <ButtonAntd {...props} type={type}>
    {children ? children : label}
  </ButtonAntd>
);

Button.defaultProps = {
  type: "primary"
};

import React, { Fragment, PureComponent } from "react";
import { notification } from "antd";

export class Notification extends PureComponent {
  static defaultProps = {
    type: "error"
  };
  componentDidMount() {
    this.props.onDeleteErrors();
  }
  render() {
    const { type, message } = this.props;
    return message ? (
      <Fragment>
        {notification[type]({
          message
        })}
      </Fragment>
    ) : null;
  }
}

import React, { PureComponent } from "react";
import { Layout, Button, Spin } from "antd";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { signInStart, signOutStart } from "../../actions/auth";

class Header extends PureComponent {
  render() {
    const { auth, loading, info } = this.props.authorization;
    return (
      <Layout.Header className="header">
        <div className="header-menu">
          <ul className="header-menu__ul">
            <li className="header-menu__li">
              <Link className="header-menu__link" to="/">
                Главная
              </Link>
            </li>
          </ul>
        </div>
        {loading ? (
          <Spin />
        ) : (
          <div className="header-sign">{this.renderBtn(auth, info)}</div>
        )}
      </Layout.Header>
    );
  }
  renderBtn = (auth, info) =>
    auth ? (
      <React.Fragment>
        <p className="header-sign__name">{info.name} | </p>
        <Button className="header-sign__btn" onClick={this.props.signOutStart}>
          Выйти
        </Button>
      </React.Fragment>
    ) : (
      <Button className="header-sign__btn" onClick={this.props.signInStart}>
        Войти
      </Button>
    );
}

const mapStateToProps = ({ authorization }) => ({ authorization });

export default connect(
  mapStateToProps,
  { signInStart, signOutStart }
)(Header);

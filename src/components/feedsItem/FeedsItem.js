import React, { Fragment, PureComponent } from "react";
import { Link } from "react-router-dom";
import { Card, Col, Icon } from "antd";
import format from "date-fns/format";

import { Button } from "../Button";

export class FeedsItem extends PureComponent {
  static defaultProps = {
    formatDate: "YYYY-MM-DD HH:MM:ss"
  };

  render() {
    const { fullFeed } = this.props;
    const { feeds } = this.props;
    const authorFeed = this.checkAuthorFeed();
    return (
      <Col span={6} className="feeds-item">
        {fullFeed
          ? this.renderFullFeed(feeds, authorFeed)
          : this.renderShortFeed(feeds, authorFeed)}
      </Col>
    );
  }

  /**
   * Рендер карточки для полного просмотра
   * @returns {*}
   */
  renderFullFeed = (feeds, authorFeed) => {
    return (
      <Fragment>
        <Card
          hoverable={true}
          title={
            <Fragment>
              <p>{feeds.title}</p>
              <p>
                {feeds.creator.displayName} |{" "}
                {format(feeds.createDate, this.props.formatDate)}
              </p>
            </Fragment>
          }
          extra={authorFeed && this.renderExtraInCard()}
        >
          <p>{feeds.content}</p>
        </Card>
        {authorFeed && (
          <Fragment>
            <Button>
              <Link to={`/news/${feeds._id}/edit`}>Редактировать</Link>
            </Button>
            <Button
              type="danger"
              label="Удалить"
              onClick={this.handleDeleteFeed}
            />
          </Fragment>
        )}
      </Fragment>
    );
  };

  /**
   * Рендер карточки на главной
   * @returns {*}
   */
  renderShortFeed = (feeds, authorFeed) => (
    <Card
      hoverable={true}
      title={
        <Fragment>
          <Link to={`/news/${feeds._id}`}>
            <p>{feeds.title}</p>
          </Link>
          <p>
            {feeds.creator.displayName} |{" "}
            {format(feeds.createDate, this.props.formatDate)}
          </p>
        </Fragment>
      }
      extra={authorFeed && this.renderExtraInCard()}
    >
      <p>{this.excerptContent(feeds.content)}</p>
    </Card>
  );

  /**
   * Кнопки действия карточки
   * @returns {*}
   */
  renderExtraInCard = () => (
    <Fragment>
      <Link
        to={`/news/${this.props.feeds._id}/edit`}
        className="ant-card-extra__link"
      >
        <Icon className="icon" type="eye" />
      </Link>
      <Icon type="close" onClick={this.handleDeleteFeed} />
    </Fragment>
  );

  /**
   * Проверка, что авторизованный пользователь является создателем новости
   * @returns {*}
   */
  checkAuthorFeed = () =>
    this.props.feeds.creator._id === this.props.idCurrentUser;

  /**
   * Пробрасываем в пропс id нужной новости для удаления
   */
  handleDeleteFeed = () => {
    this.props.onDeleteFeed(this.props.feeds._id, this.props.redirect);
  };

  /**
   * Обрезаем текст, если символов > sliceNum.
   * По умолчанию sliceNum = 200 символов
   * @param content
   * @param sliceNum
   * @returns {string}
   */
  excerptContent = (content, sliceNum = 200) =>
    content.length > sliceNum
      ? `${content.substring(0, sliceNum)}...`
      : content;
}

import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Input } from "antd";
import { withRouter } from "react-router-dom";

import { loadFeedStart, saveFeed } from "../../actions/feed";
import { Button } from "../../components/Button";

const { TextArea } = Input;

class Edit extends PureComponent {
  state = {
    title: null,
    content: null
  };

  componentDidUpdate(prevProps) {
    const { news } = this.props.feed;
    if (prevProps.feed.news !== news) {
      this.setState(() => ({
        title: news.title,
        content: news.content
      }));
    }
  }

  componentDidMount() {
    this.props.loadFeedStart(this.props.match.params.id);
  }

  render() {
    return (
      <div className="edit-card">
        <h1>Редактирование новости</h1>
        <Input
          placeholder="Введите заголовок"
          value={this.state.title}
          name="title"
          className="card-input"
          onChange={this.handleChangeText}
        />
        <TextArea
          placeholder="Введите контент"
          className="card-content"
          name="content"
          autosize={{ minRows: 6 }}
          value={this.state.content}
          onChange={this.handleChangeText}
        />
        <div className="buttons">
          <Button label="Сохранить" onClick={this.handleSaveFeed} />
          <Button label="Отменить" onClick={this.props.history.goBack} />
        </div>
      </div>
    );
  }

  /**
   * Обработчик смены текста в полях
   * @param e
   */
  handleChangeText = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  /**
   * Сохранение новости
   */
  handleSaveFeed = () => {
    const body = {
      title: this.state.title,
      content: this.state.content
    };
    this.props.saveFeed(this.props.feed.news._id, body);
  };
}

const mapStateToProps = ({ feed }) => ({
  feed
});

export default withRouter(
  connect(
    mapStateToProps,
    { loadFeedStart, saveFeed }
  )(Edit)
);

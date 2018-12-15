import React, { Component } from "react";
import { connect } from "react-redux";
import { Spin, Row } from "antd";

import { loadNewsStart } from "../actions/feeds";
import { deleteFeedStart } from "../actions/feed";
import { FeedsItem } from "../components/feedsItem";

class Feeds extends Component {
  componentDidMount() {
    this.props.loadNewsStart();
  }

  render() {
    const { loading, news } = this.props.feeds;
    return (
      <div className="page">
        <Row gutter={16}>
          {loading && <Spin />}
          {news.length > 0 &&
            news.map(newsItem => (
              <FeedsItem
                onDeleteFeed={this.props.deleteFeedStart}
                key={newsItem._id}
                feeds={newsItem}
                idCurrentUser={this.props.authorization.info.id}
              />
            ))}
        </Row>
      </div>
    );
  }
}

const mapStateToProps = ({ feeds, authorization }) => ({
  feeds,
  authorization
});

export default connect(
  mapStateToProps,
  { loadNewsStart, deleteFeedStart }
)(Feeds);

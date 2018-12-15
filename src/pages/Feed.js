import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Spin } from "antd";

import { loadFeedStart, resetFeed, deleteFeedStart } from "../actions/feed";
// import { Error } from "../components/Error";
import { FeedsItem } from "../components/feedsItem";

class Feed extends PureComponent {
  componentDidMount() {
    this.props.loadFeedStart(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.resetFeed();
  }

  render() {
    const { news, loading } = this.props.feed;
    return (
      <div>
        {loading && <Spin />}
        {Object.keys(news).length > 0 && (
          <FeedsItem
            onDeleteFeed={this.props.deleteFeedStart}
            key={news._id}
            feeds={news}
            redirect={true}
            fullFeed={true}
            idCurrentUser={this.props.authorization.info.id}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ feed, authorization }) => ({
  feed,
  authorization
});

export default connect(
  mapStateToProps,
  { loadFeedStart, resetFeed, deleteFeedStart }
)(Feed);

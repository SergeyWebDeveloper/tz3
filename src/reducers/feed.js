import {
  LOAD_FEED_START,
  LOAD_FEED_SUCCESS,
  RESET_FEED
} from "../constants/feed";
import { STOP_LOADING } from "../constants/loading";

const initialState = {
  loading: false,
  news: {}
};

export const feed = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_FEED_START: {
      return {
        ...state,
        loading: true
      };
    }
    case LOAD_FEED_SUCCESS: {
      return {
        ...state,
        loading: false,
        news: action.feed
      };
    }
    case STOP_LOADING: {
      return {
        ...state,
        loading: false
      };
    }
    case RESET_FEED: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

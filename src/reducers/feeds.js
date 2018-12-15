import { LOAD_FEEDS_START, LOAD_FEEDS_SUCCESS } from "../constants/feeds";
import { STOP_LOADING } from "../constants/loading";

const initialState = {
  loading: false,
  news: []
};

export const feeds = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_FEEDS_START: {
      return {
        ...state,
        loading: true
      };
    }
    case LOAD_FEEDS_SUCCESS: {
      return {
        ...state,
        loading: false,
        news: action.news
      };
    }
    case STOP_LOADING: {
      return {
        ...state,
        loading: false
      };
    }
    default: {
      return state;
    }
  }
};

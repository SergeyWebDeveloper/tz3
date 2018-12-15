import {
  LOAD_FEED_START,
  LOAD_FEED_SUCCESS,
  RESET_FEED,
  DELETE_FEED_START,
  SAVE_FEED
} from "../constants/feed";
import { STOP_LOADING } from "../constants/loading";

export const loadFeedStart = id => ({
  type: LOAD_FEED_START,
  id
});

export const loadFeedSuccess = feed => ({
  type: LOAD_FEED_SUCCESS,
  feed
});

export const resetFeed = () => ({
  type: RESET_FEED
});

export const deleteFeedStart = (id, redirect = false) => ({
  type: DELETE_FEED_START,
  payload: { id, redirect }
});

export const saveFeed = (id, data) => ({
  type: SAVE_FEED,
  payload: { id, data }
});

export const stopLoading = () => ({
  type: STOP_LOADING
});

import { LOAD_FEEDS_START, LOAD_FEEDS_SUCCESS } from "../constants/feeds";
import { STOP_LOADING } from "../constants/loading";

export const loadNewsStart = () => ({
  type: LOAD_FEEDS_START
});

export const loadNewsSuccess = news => ({
  type: LOAD_FEEDS_SUCCESS,
  news
});

export const stopLoading = () => ({
  type: STOP_LOADING
});

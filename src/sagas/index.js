import { takeEvery } from "redux-saga/effects";

import { SIGN_IN_START, SIGN_OUT_START } from "../constants/auth";
import { LOAD_FEEDS_START } from "../constants/feeds";
import {
  LOAD_FEED_START,
  DELETE_FEED_START,
  SAVE_FEED
} from "../constants/feed";
import { signInSaga, signOutSaga } from "./auth";
import { loadFeedsSaga } from "./feeds";
import { loadFeedSaga, deleteFeedSaga, saveFeedSaga } from "./feed";

export function* rootSaga() {
  yield takeEvery(SIGN_IN_START, signInSaga);
  yield takeEvery(SIGN_OUT_START, signOutSaga);
  yield takeEvery(LOAD_FEEDS_START, loadFeedsSaga);
  yield takeEvery(DELETE_FEED_START, deleteFeedSaga);
  yield takeEvery(LOAD_FEED_START, loadFeedSaga);
  yield takeEvery(SAVE_FEED, saveFeedSaga);
}

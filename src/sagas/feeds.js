import { put, call } from "redux-saga/effects";
import { loadNewsSuccess, stopLoading } from "../actions/feeds";
import { addNotification } from "../actions/errors";
import { message } from "../errorMessage";

import { loadFeeds } from "../fetch";

/**
 * Загрузка списка новостей
 * @returns {IterableIterator<*>}
 */
export function* loadFeedsSaga() {
  try {
    const { data } = yield call(loadFeeds);
    yield put(loadNewsSuccess(data.feeds));
  } catch (e) {
    yield put(stopLoading());
    yield put(addNotification(`${message.feeds.load}: ${e.message}`));
  }
}

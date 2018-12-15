import { call, put } from "redux-saga/effects";
import { push } from "react-router-redux";

import { deleteFeed, loadFeed, updateFeed } from "../fetch";
import { loadFeedSuccess, stopLoading } from "../actions/feed";
import { loadNewsStart } from "../actions/feeds";
import { addNotification } from "../actions/errors";
import { message } from "../errorMessage";

/**
 * Загрузка новости
 * @param id
 * @returns {IterableIterator<*>}
 */
export function* loadFeedSaga({ id }) {
  try {
    const { data } = yield call(loadFeed, id);
    yield put(loadFeedSuccess(data.feed));
  } catch (e) {
    yield put(stopLoading());
    yield put(addNotification(`${message.feed.load}: ${e.message}`));
  }
}

/**
 * Удаление новости
 * @param payload
 * @returns {IterableIterator<*>}
 */
export function* deleteFeedSaga({ payload }) {
  try {
    yield call(deleteFeed, payload.id);
    if (payload.redirect) {
      yield put(push("/"));
      return;
    }
    yield put(loadNewsStart());
  } catch (e) {
    yield put(addNotification(`${message.feed.delete}: ${e.message}`));
  }
}

/**
 * Сохранение новости
 * @param payload
 * @returns {IterableIterator<*>}
 */
export function* saveFeedSaga({ payload }) {
  const { id, data } = payload;
  try {
    yield call(updateFeed, id, data);
    yield put(push(`/news/${id}`));
  } catch (e) {
    yield put(addNotification(`${message.feed.save}: ${e.message}`));
  }
}

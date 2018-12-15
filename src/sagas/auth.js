import axios from "axios";
import { put, call } from "redux-saga/effects";
import jwtDecode from "jwt-decode";

import { authGoogle } from "../fetch";
import { signInSuccess, signOutSuccess, stopLoading } from "../actions/auth";
import { addNotification } from "../actions/errors";
import { message } from "../errorMessage";

/**
 * Авторизация в приложении
 * @returns {IterableIterator<*>}
 */
export function* signInSaga() {
  try {
    const auth2 = yield window.gapi.auth2.getAuthInstance();
    let dataUser = {};
    let token = "";
    yield auth2.signIn().then(googleUser => {
      const profile = googleUser.getBasicProfile();
      token = googleUser.getAuthResponse().id_token;
      dataUser = {
        name: profile.getGivenName(),
        family: profile.getFamilyName(),
        email: profile.getEmail()
      };
    });
    const { data } = yield call(authGoogle, token);
    axios.defaults.headers.common["x-access-token"] = data.token;
    const { id } = jwtDecode(data.token);
    dataUser = { ...dataUser, id };
    yield put(signInSuccess(dataUser));
  } catch (e) {
    yield put(stopLoading());
    yield put(addNotification(`${message.auth.signIn}: ${e}`));
  }
}

/**
 * Разлогирование
 * @returns {IterableIterator<*>}
 */
export function* signOutSaga() {
  try {
    yield window.gapi.auth2.getAuthInstance().signOut();
    yield put(signOutSuccess());
  } catch (e) {
    yield put(addNotification(`${message.auth.signOut}: ${e.error}`));
  }
}

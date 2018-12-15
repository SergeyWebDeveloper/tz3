import {
  SIGN_IN_START,
  SIGN_IN_SUCCESS,
  SIGN_OUT_START,
  SIGN_OUT_SUCCESS
} from "../constants/auth";
import { STOP_LOADING } from "../constants/loading";

export const signInStart = () => ({
  type: SIGN_IN_START
});

export const signInSuccess = data => ({
  type: SIGN_IN_SUCCESS,
  data
});

export const signOutStart = () => ({
  type: SIGN_OUT_START
});

export const signOutSuccess = () => ({
  type: SIGN_OUT_SUCCESS
});

export const stopLoading = () => ({
  type: STOP_LOADING
});

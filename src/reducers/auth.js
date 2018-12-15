import {
  SIGN_IN_START,
  SIGN_IN_SUCCESS,
  SIGN_OUT_SUCCESS
} from "../constants/auth";

import { STOP_LOADING } from "../constants/loading";

const initialState = {
  auth: false,
  loading: false,
  info: {
    name: "",
    family: "",
    id: ""
  }
};

export const authorization = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_START: {
      return {
        ...state,
        loading: true
      };
    }
    case SIGN_IN_SUCCESS: {
      return {
        ...state,
        auth: true,
        loading: false,
        info: { ...action.data }
      };
    }
    case SIGN_OUT_SUCCESS: {
      return initialState;
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

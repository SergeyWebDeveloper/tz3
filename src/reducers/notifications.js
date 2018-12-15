import {
  ADD_NOTIFICATION,
  REMOVE_NOTIFICATION
} from "../constants/notifications";

export const notifications = (state = [], action) => {
  switch (action.type) {
    case ADD_NOTIFICATION: {
      return [...state, action.info];
    }
    case REMOVE_NOTIFICATION: {
      return [];
    }
    default: {
      return state;
    }
  }
};

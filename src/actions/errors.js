import {
  ADD_NOTIFICATION,
  REMOVE_NOTIFICATION
} from "../constants/notifications";

export const addNotification = (message, type = "error") => ({
  type: ADD_NOTIFICATION,
  info: {
    message,
    type
  }
});

export const deleteNotification = () => ({
  type: REMOVE_NOTIFICATION
});


import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import notificationReducer from "../domain/notification/notification.slice";
import snackbarReducer from "../components/snackbar/snackbar.slice";

const middleware = [...getDefaultMiddleware()]
const reducer = {
  notification: notificationReducer,
  snackbar: snackbarReducer
}

export default configureStore({
  reducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import notificationReducer from "../domain/notification/notification.slice";
import snackbarReducer from "../components/snackbar/snackbar.slice";
import config from "../services/config"
const middleware = [...getDefaultMiddleware()]
const reducer = {
  notification: notificationReducer,
  snackbar: snackbarReducer
}

export default configureStore({
  reducer,
  middleware,
  devTools: config.REACT_APP_APOLLO_DEV_TOOLS,
});
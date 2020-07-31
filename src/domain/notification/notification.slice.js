import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

export const notificationAdapter = createEntityAdapter();

const initialState = notificationAdapter.getInitialState({selectedNotifications: [], selectedDapp:"",email:""});

export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    updateSelectedNotifications: (state, action) => {
      return {...state, selectedNotifications: [...action.payload]}
      },
    updateSelectedDapp: (state, action) => {
      return {...state, selectedDapp: action.payload}
    },
    updateEmail: (state, action) => {
      return {...state, email: action.payload}
    },
  }
})


export const { updateSelectedNotifications,updateSelectedDapp,updateEmail } = notificationSlice.actions;

export const Notification = (state) => state.notification;

export default notificationSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    sendMessageIsOpen: false,
    selectedMessage: null,
  },

  reducers: {
    openToSendMsg: (state) => {
      state.sendMessageIsOpen = true;
    },
    closeToSendMsg: (state) => {
      state.sendMessageIsOpen = false;
    },
    openMessage: (state, action) => {
      state.selectedMessage = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;

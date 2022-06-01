import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth";
import uiSlice from "./Ui-Slice";


const store = configureStore({
    reducer : {ui: uiSlice.reducer, auth: authSlice.reducer}
});

export default store;
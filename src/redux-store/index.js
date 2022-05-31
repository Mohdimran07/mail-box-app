import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./Ui-Slice";


const store = configureStore({
    reducer : {ui: uiSlice.reducer}
});

export default store;
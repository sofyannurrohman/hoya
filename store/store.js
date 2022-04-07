import { configureStore } from "@reduxjs/toolkit";
import reportSlice from "./reportSlice.js";

const store = configureStore({
  reducer: {
    report: reportSlice.reducer,
  },
});

export default store;

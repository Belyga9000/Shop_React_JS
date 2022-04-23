import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./store/header/headerSlice";
import contentReducer from "./store/content/contentSlice";

export const store = configureStore({
  reducer: {
    header: headerReducer,
    content: contentReducer,
  },
});

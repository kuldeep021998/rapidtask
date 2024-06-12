import { configureStore } from "@reduxjs/toolkit";
import mainThemeReducer from "./Slice";

const Store = configureStore({
  reducer: {
    theme: mainThemeReducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;

export default Store;

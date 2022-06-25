import { configureStore } from "@reduxjs/toolkit";
import userSlice from "@/redux/user";
import userReducer from "@/redux/user";

const reduxStore = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default reduxStore;

export type RootState = ReturnType<typeof reduxStore.getState>;

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/redux/userSlice";

const reduxStore = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default reduxStore;

export type RootState = ReturnType<typeof reduxStore.getState>;

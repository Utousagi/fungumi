import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    id : 0,
    loaded: false,
    name: "",
    avatar: "",
    isLogin: false,
  },
  reducers: {
    init: {
      prepare() {
        return {
          payload: {},
        };
      },
      reducer(state) {
        state.loaded = true;
      },
    },
    login: {
      prepare(props: { name: string; avatar: string }) {
        return {
          payload: { name: props.name, avatar: props.avatar },
        };
      },
      reducer(state, action: PayloadAction<{ name: string; avatar: string }>) {
        state.name = action.payload.name;
        state.avatar = action.payload.avatar;
        state.isLogin = true;
      },
    },
    logout: {
      prepare() {
        return {
          payload: {},
        };
      },
      reducer(state) {
        state.name = "";
        state.avatar = "";
        state.isLogin = false;
      },
    },
    modify: {
      prepare(props: { name?: string; avatar?: string }) {
        return {
          payload: { name: props.name, avatar: props.avatar },
        };
      },
      reducer(
        state,
        action: PayloadAction<{ name?: string; avatar?: string }>
      ) {
        if (action.payload.name) state.name = action.payload.name;
        if (action.payload.avatar) state.avatar = action.payload.avatar;
      },
    },
  },
});

const userReducer = userSlice.reducer;

export default userReducer;
export const userAction = userSlice.actions;

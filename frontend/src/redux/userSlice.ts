import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    id: 0,
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
      prepare(props: { id: number; name: string; avatar: string }) {
        return {
          payload: { id: props.id, name: props.name, avatar: props.avatar },
        };
      },
      reducer(state, action: PayloadAction<{ id: number; name: string; avatar: string }>) {
        state.id = action.payload.id;
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
        state.id = 0;
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

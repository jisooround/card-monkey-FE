import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit/dist/configureStore";

const initialState = { heart: false };

const favorSlice = createSlice({
  name: "favor",
  initialState,
  reducers: {
    fill(state) {
      state.heart = !state.heart;
    },
  },
});

const store = configureStore({
  reducer: favorSlice.reducer,
});

export const favorActions = favorSlice.actions;

export default store;

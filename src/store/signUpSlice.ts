import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface FormState {
  userId: string;
  password: string;
  name: string;
  benefit: object;
}

const initialState: FormState = {
  userId: "",
  password: "",
  name: "",
  benefit: [],
};

export const signUpSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    fillName(state, action) {
      let content = action.payload;
      state.name = content;
    },
    fillId(state, action) {
      let content = action.payload;
      state.userId = content;
    },
    fillPassword(state, action) {
      let content = action.payload;
      state.password = content;
    },
    selectBenefit(state, action) {
      let content = action.payload;
      state.benefit = content;
    },
  },
});

// Action creators are generated for each case reducer function
export const { fillName, fillId, fillPassword, selectBenefit } =
  signUpSlice.actions;

export default signUpSlice.reducer;

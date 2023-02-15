import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface FormState {
  agree: boolean;
  name: string;
  id: string;
  password: string;
}

const initialState: FormState = {
  agree: false,
  name: "",
  id: "",
  password: "",
};

export const signUpSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    fillAgreement(state) {
      state.agree = true;
    },
    fillName(state, action) {
      let content = action.payload;
      state.name = content;
    },
    fillId(state, action) {
      let content = action.payload;
      state.id = content;
    },
    fillPassword(state, action) {
      let content = action.payload;
      state.password = content;
    },
  },
});

// Action creators are generated for each case reducer function
export const { fillAgreement, fillName, fillId, fillPassword } =
  signUpSlice.actions;

export default signUpSlice.reducer;

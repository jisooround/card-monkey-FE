import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import getTokenApi from "../api/monkeyGetToken";

export interface FavorCardState {
  favorList: FavorCard[];
  status: "idle" | "loading" | "failed";
}

export interface FavorCard {
  id: number;
  name: string;
  company: string;
  image: string;
}

const initialState = {
  favorList: [] as FavorCard[],
  status: "idle",
};

export const fetchFavor = createAsyncThunk("favor/fetchFavor", async () => {
  const data = await getTokenApi.myFavor();
  return data;
});

export const addFavor = createAsyncThunk("favor/addFavor", async () => {
  const data = await getTokenApi.myFavor();
  return data;
});

export const deleteFavor = createAsyncThunk(
  "favor/deleteFavor",
  async (id: number) => {
    const data = await getTokenApi.deleteFavor(id);
    return data;
  },
);

export const favorSlice = createSlice({
  name: "favor",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFavor.pending, (state) => {
      //   state.status = "loading";
    });
    builder.addCase(fetchFavor.fulfilled, (state, action) => {
      state.status = "idle";
      state.favorList = action.payload;
    });
    builder.addCase(fetchFavor.rejected, (state) => {
      //   state.status = "failed";
    });
    builder.addCase(deleteFavor.pending, (state) => {
      //   state.status = "loading";
    });
    builder.addCase(deleteFavor.fulfilled, (state, action) => {
      state.status = "idle";
      state.favorList = action.payload;
    });
    builder.addCase(deleteFavor.rejected, (state) => {
      //   state.status = "failed";
    });
  },
});

export const {} = favorSlice.actions;

export default favorSlice.reducer;

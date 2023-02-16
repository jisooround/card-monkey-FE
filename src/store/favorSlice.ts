import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import getTokenApi from "../api/monkeyGetToken";
import { useMatch } from "react-router";

export interface FavorCardState {
  favorList: FavorCard[];
  status: "idle" | "loading" | "failed";
}

export const fetchFavor = createAsyncThunk("favor/fetchFavor", async () => {
  const data = await getTokenApi.myFavor();
  return data;
});

const initialState = {
  favorList: [] as FavorCard[],
  status: "idle",
  liked: true,
  likeCount: fetchFavor().length,
};

export const favorSlice = createSlice({
  name: "favor",
  initialState,
  reducers: {
    addFavor(state, action: PayloadAction<FavorCard>) {
      const newFavor = action.payload;
      state.favorList = [...state.favorList, newFavor];
      state.liked = !action.payload.liked;
      state.likeCount += 1;
    },
    deleteFavor(state, action: PayloadAction<FavorCard>) {
      const id = action.payload.id;
      state.favorList = state.favorList.filter((item) => item.id !== id);
      state.liked = !action.payload.liked;
      state.likeCount -= 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFavor.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchFavor.fulfilled, (state, action) => {
      state.status = "idle";
      state.favorList = action.payload;
    });
    builder.addCase(fetchFavor.rejected, (state) => {
      state.status = "failed";
    });
  },
});

console.log("pppp", favorSlice);

export const { addFavor, deleteFavor } = favorSlice.actions;

export default favorSlice.reducer;

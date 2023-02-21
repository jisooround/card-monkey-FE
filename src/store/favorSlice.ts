import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import getTokenApi from "../api/monkeyGetToken";
import { SearchCard } from "./searchSlice";

export interface FavorCardState {
  favorList: FavorCard[];
  status: "idle" | "loading" | "failed";
}

export interface FavorCard {
  id: number;
  name: string;
  company: string;
  image: string;
  type: string;
}

const initialState = {
  favorList: [] as FavorCard[],
  status: "idle",
};

export const fetchFavor = createAsyncThunk(
  "favor/fetchFavor",
  async (userId: string) => {
    const data = await getTokenApi.myFavor(userId);
    return data;
  },
);

export const favorSlice = createSlice({
  name: "favor",
  initialState,
  reducers: {
    addFavor(state, action: PayloadAction<FavorCard>) {
      const newFavor = action.payload;
      state.favorList = [...state.favorList, newFavor];
    },

    deleteFavor(state, action: PayloadAction<number>) {
      const id = action.payload;
      state.favorList = state.favorList.filter((item) => item.id !== id);
      console.log("delete");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFavor.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchFavor.fulfilled, (state, action) => {
      state.status = "idle";
      if (action.payload) state.favorList = action.payload;
    });
    builder.addCase(fetchFavor.rejected, (state) => {
      state.status = "failed";
    });
  },
});

export const { addFavor, deleteFavor } = favorSlice.actions;

export default favorSlice.reducer;

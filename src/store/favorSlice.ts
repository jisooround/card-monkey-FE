import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import getTokenApi from "../api/monkeyGetToken";

export interface FavorCardState {
  favorList: FavorCard[];
  status: "idle" | "loading" | "failed";
}

export const fetchFavor = createAsyncThunk("favor/fetchFavor", async () => {
  const data = await getTokenApi.myFavor();
  return data;
});
console.log(fetchFavor.length);

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
      console.log("add");
    },
    deleteFavor(state, action: PayloadAction<FavorCard>) {
      const id = action.payload.id;
      state.favorList = state.favorList.filter((item) => item.id !== id);
      console.log("delete");
    },
    toggleFavor(state) {
      state.liked = !state.liked;
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

export const { addFavor, deleteFavor, toggleFavor } = favorSlice.actions;

export default favorSlice.reducer;

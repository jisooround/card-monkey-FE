import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getTokenApi from "../api/monkeyGetToken";

interface State {
  id: number;
  review: string[];
}

const initialState: State = {
  id: 0,
  review: [],
};

export const fetchReview = createAsyncThunk("card/fetchReview", async () => {
  const data = await getTokenApi.selectReview(id, review);
  return data;
});

export const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    selectReview(state, action) {
      let content = action.payload;
      state.review = content;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchReview.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchReview.fulfilled, (state, action) => {
      state.status = "idle";
      state.review = action.payload;
    });
    builder.addCase(fetchReview.rejected, (state) => {
      state.status = "failed";
    });
  },
});

export default reviewSlice;

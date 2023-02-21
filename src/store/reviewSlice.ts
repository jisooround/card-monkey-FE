import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getTokenApi from "../api/monkeyGetToken";

const initialState: State = {
  id: 0,
  message: [],
  status: "idle",
};

export const fetchReview = createAsyncThunk(
  "review/fetchReview",
  async (data: State) => {
    return await getTokenApi.selectReview(data);
  },
);

export const fetchReviewList = createAsyncThunk(
  "review/fetchReviewList",
  async (id: number) => {
    const data = await getTokenApi.getReview(id);
    return data;
  },
);

export const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    selectReview(state, action) {
      if (state.message.includes(action.payload)) {
        state.message = state.message.filter((item) => item != action.payload);
      } else {
        state.message = state.message;
      }
      let content = action.payload;
      state.message = content;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchReviewList.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchReviewList.fulfilled, (state, action) => {
      state.status = "idle";
      state.message = state.message.concat(action.payload);
    });
    builder.addCase(fetchReviewList.rejected, (state) => {
      state.status = "failed";
    });
  },
});

export const { selectReview } = reviewSlice.actions;

export default reviewSlice.reducer;

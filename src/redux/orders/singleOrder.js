import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {};

export const fetchSingleOrder = createAsyncThunk("singleOrder", async (id) => {
  try {
    const { data } = await axios.get(`/api/orders/${id}`);
    return data;
  } catch (err) {
    console.log(err);
  }
});

const singleOrderSlice = createSlice({
  name: "singleOrder",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSingleOrder.fulfilled, (state, action) => {
      // Add order to the state
      return action.payload;
    });
  },
});

export const selectSingleOrder = (state) => {
  return state.singleOrder;
};

export default singleOrderSlice.reducer;
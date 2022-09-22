import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {};

export const fetchSinglePet = createAsyncThunk("singlePet", async (id) => {
  try {
    const { data } = await axios.get(`/api/pets/${id}`);
    return data;
  } catch (err) {
    console.log(err);
  }
});

const singlePetSlice = createSlice({
  name: "singlePet",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSinglePet.fulfilled, (state, action) => {
      // Add pet to the state
      return action.payload;
    });
  },
});

export const selectSinglePet = (state) => {
  return state.singlePet;
};

export default singlePetSlice.reducer;
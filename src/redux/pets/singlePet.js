import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchSinglePet = createAsyncThunk("singlePet", async (id) => {
  try {
    const { data } = await axios.get(`/api/pets/${id}`);
    return data;
  } catch (err) {
    console.log(err);
  }
});

let initialState ={}

const singlePetSlice = createSlice({
  name: "singlePet",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSinglePet.fulfilled, (state, action) => {
      console.log('ACTION: ', action.payload)
      // Add pet to the state
      state.singlePet = action.payload;
    });
  },
});

export const selectSinglePet = (state) => {
  console.log('STATE: ', state)
  return state.singlePet;
};

export default singlePetSlice.reducer;
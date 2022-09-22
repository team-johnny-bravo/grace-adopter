import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const fetchPetsAsync = createAsyncThunk("allPets", async () => {
  try {
    const { data } = await axios.get(`/api/pets`);
    return data;
  } catch (err) {
    console.log(err);
  }
});

export const addPetAsync = createAsyncThunk(
  "createPet",
  async ({
    name,
    age,
    image,
    description,
    favoriteToys,
    species,
    collarSize,
    status,
  }) => {
    try {
      const { data } = await axios.post(`/api/pets`, {
        name,
        age,
        image,
        description,
        favoriteToys,
        species,
        collarSize,
        status,
      });
      return data;
    } catch (err) {
      console.log(err.response);
    }
  }
);

export const deletePetAsync = createAsyncThunk("deletePet", async (petId) => {
  try {
    const { data } = await axios.delete(`/api/pets/${petId}`);
    return data;
  } catch (err) {
    console.log(err);
  }
});

export const editPetAsync = createAsyncThunk(
  "editPet",
  async ({
    name,
    age,
    image,
    description,
    favoriteToys,
    species,
    collarSize,
    status,
  }) => {
    const { data } = await axios.put(`/api/pets/${id}`, {
      name,
      age,
      image,
      description,
      favoriteToys,
      species,
      collarSize,
      status,
    });
    return data;
  }
);

const petsSlice = createSlice({
  name: "pets",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPetsAsync.fulfilled, (state, action) => {
      // Add user to the state array
      return action.payload;
    });
  },
});

export const selectPets = (state) => {
  return state.pets;
};

export default petsSlice.reducer;

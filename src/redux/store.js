import { configureStore } from "@reduxjs/toolkit";
import petsSlice from "./pets/pets";
import singlePetSlice from "./pets/singlePet";

export const store = configureStore({
  reducer: {
    pets: petsSlice,
    singlePet: singlePetSlice,
  },
});

export default store;

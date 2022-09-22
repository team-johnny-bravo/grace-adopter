import { configureStore } from "@reduxjs/toolkit";
import petsSlice from "./pets/pets";
import singlePetSlice from "./pets/singlePet";
import productsSlice from "./products/products";
import singleProductSlice from "./products/singleProduct";
import usersSlice from "./users/users";
import singleUserSlice from "./users/singleUser";
import ordersSlice from "./orders/orders";
import singleOrderSlice from "./orders/singleOrder";

export const store = configureStore({
  reducer: {
    pets: petsSlice,
    singlePet: singlePetSlice,
    products: productsSlice,
    singleProduct: singleProductSlice,
    users: usersSlice,
    singleUser: singleUserSlice,
    orders: ordersSlice,
    singleOrder: singleOrderSlice,
  },
});

export default store;

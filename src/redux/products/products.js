import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const fetchProductsAsync = createAsyncThunk("allProducts", async () => {
  try {
    const { data } = await axios.get(`/api/products`);
    return data;
  } catch (err) {
    console.log(err);
  }
});

export const addProductAsync = createAsyncThunk(
  "createProduct",
  async ({ name, description, price, size }) => {
    try {
      const { data } = await axios.post(`/api/products`, {
        name,
        description,
        price,
        size,
      });
      return data;
    } catch (err) {
      console.log(err.response);
    }
  }
);

export const deleteProductAsync = createAsyncThunk(
  "deleteProduct",
  async (productId) => {
    try {
      const { data } = await axios.delete(`/api/products/${productId}`);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const editProductAsync = createAsyncThunk(
  "editProduct",
  async ({ name, description, price, size }) => {
    const { data } = await axios.put(`/api/products/${id}`, {
      name,
      description,
      price,
      size,
    });
    return data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProductsAsync.fulfilled, (state, action) => {
      // Add user to the state array
      return action.payload;
    });
  },
});

export const selectProducts = (state) => {
  return state.products;
};

export default productsSlice.reducer;

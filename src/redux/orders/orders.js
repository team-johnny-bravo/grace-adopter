import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const fetchOrdersAsync = createAsyncThunk("allOrders", async () => {
  try {
    const { data } = await axios.get(`/api/orders`);
    return data;
  } catch (err) {
    console.log(err);
  }
});

export const addOrderAsync = createAsyncThunk(
  "createOrder",
  async ({ isCart, items }) => {
    try {
      const { data } = await axios.post(`/api/orders`, {
        isCart,
        items,
      });
      return data;
    } catch (err) {
      console.log(err.response);
    }
  }
);

export const deleteOrderAsync = createAsyncThunk(
  "deleteOrder",
  async (orderId) => {
    try {
      const { data } = await axios.delete(`/api/orders/${orderId}`);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const editOrderAsync = createAsyncThunk(
  "editOrder",
  async ({ isCart, items }) => {
    const { data } = await axios.put(`/api/orders/${id}`, {
      isCart,
      items,
    });
    return data;
  }
);

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOrdersAsync.fulfilled, (state, action) => {
      // Add order to the state array
      return action.payload;
    });
  },
});

export const selectOrders = (state) => {
  return state.orders;
};

export default ordersSlice.reducer;

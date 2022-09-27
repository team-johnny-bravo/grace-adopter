import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const fetchUsersAsync = createAsyncThunk("allUsers", async () => {
  try {
    const { data } = await axios.get(`/api/users`);
    return data;
  } catch (err) {
    console.log(err);
  }
});

export const addUserAsync = createAsyncThunk(
  "createUser",
  async ({
    userName,
    password,
    email,
    firstName,
    lastName,
    address,
    yearsOfExperience,
    isAdmin,
  }) => {
    try {
      const { data } = await axios.post(`/api/users/signup`, {
        userName,
        password,
        email,
        firstName,
        lastName,
        address,
        yearsOfExperience,
        isAdmin,
      });
      return data;
    } catch (err) {
      console.log(err.response);
    }
  }
);

export const deleteUserAsync = createAsyncThunk(
  "deleteUser",
  async (userId) => {
    try {
      const { data } = await axios.delete(`/api/users/${userId}`);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const editUserAsync = createAsyncThunk(
  "editUser",
  async ({
    userName,
    password,
    email,
    firstName,
    lastName,
    address,
    yearsOfExperience,
    isAdmin,
  }) => {
    const { data } = await axios.put(`/api/users/${id}`, {
      userName,
      password,
      email,
      firstName,
      lastName,
      address,
      yearsOfExperience,
      isAdmin,
    });
    return data;
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsersAsync.fulfilled, (state, action) => {
      // Add user to the state array
      return action.payload;
    });
  },
});

export const selectUsers = (state) => {
  return state.users;
};

export default usersSlice.reducer;

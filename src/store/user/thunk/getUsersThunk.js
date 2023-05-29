import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUsersThunk = createAsyncThunk(
  "users/getUsers",
  async (page, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://frontend-test-assignment-api.abz.agency/api/v1/users/?page=${page}&count=6`
      );
      const dataUsers = await response.json();
      if (!dataUsers.success) {
        throw new Error(dataUsers.message);
      }
      return { nextPage: dataUsers.links.next_url, users: dataUsers.users };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

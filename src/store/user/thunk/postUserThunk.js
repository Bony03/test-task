import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUsersThunk } from "./getUsersThunk";
import { clearUsers, setPage } from "../userSlice";

export const postUserThunk = createAsyncThunk(
  "users/postUser",
  async (userData, { rejectWithValue, dispatch }) => {
    try {
      const tokenResponse = await fetch(
        "https://frontend-test-assignment-api.abz.agency/api/v1/token"
      );
      const token = await tokenResponse.json();
      if (!token.success) {
        throw new Error(token.message);
      }
      const formData = new FormData();
      formData.append("position_id", userData.positionId);
      formData.append("name", userData.name);
      formData.append("email", userData.email);
      formData.append("phone", userData.phone);
      formData.append("photo", userData.photo);
      const response = await fetch(
        "https://frontend-test-assignment-api.abz.agency/api/v1/users",
        {
          method: "POST",
          headers: { Token: token.token },
          body: formData,
        }
      );
      const responseData = await response.json();
      if (responseData.success) {
        dispatch(setPage(1));
        dispatch(clearUsers());
        dispatch(getUsersThunk(1));
        return;
      } else {
        throw new Error(token.message);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

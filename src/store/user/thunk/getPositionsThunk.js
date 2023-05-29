import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPositionsThunk = createAsyncThunk(
  "position/getPositions",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://frontend-test-assignment-api.abz.agency/api/v1/positions"
      );
      const data = await response.json();
      if (!data.success) {
        throw new Error(data.message);
      }
      return data.positions;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

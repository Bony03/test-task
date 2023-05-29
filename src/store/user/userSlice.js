import { createSlice } from "@reduxjs/toolkit";
import { getUsersThunk } from "./thunk/getUsersThunk";
import { postUserThunk } from "./thunk/postUserThunk";
import { getPositionsThunk } from "./thunk/getPositionsThunk";
const initialState = {
  users: [],
  positions: [],
  system: {
    page: 1,
    nextPage: null,
    loading: false,
    error: null,
    success: false,
  },
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setPage(state, action) {
      action.payload
        ? (state.system.page = action.payload)
        : (state.system.page += 1);
    },
    clearUsers(state, action) {
      state.users = [];
    },
    closeSuccess(state, action) {
      state.system.success = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUsersThunk.pending, (state, action) => {
      state.system.loading = true;
    });
    builder.addCase(getUsersThunk.fulfilled, (state, action) => {
      state.system.loading = false;
      state.system.nextPage = action.payload.nextPage;
      for (let index = 0; index < action.payload.users.length; index++) {
        state.users.push(action.payload.users[index]);
      }
    });
    builder.addCase(getUsersThunk.rejected, (state, action) => {
      state.system.loading = false;
      state.system.error = action.payload;
    });
    builder.addCase(postUserThunk.pending, (state, action) => {
      state.system.loading = true;
    });
    builder.addCase(postUserThunk.fulfilled, (state, action) => {
      state.system.loading = false;
      state.system.success = true;
    });
    builder.addCase(postUserThunk.rejected, (state, action) => {
      state.system.loading = false;
      state.system.error = action.payload;
    });
    builder.addCase(getPositionsThunk.pending, (state, action) => {
      state.system.loading = true;
    });
    builder.addCase(getPositionsThunk.fulfilled, (state, action) => {
      state.system.loading = false;
      for (let index = 0; index < action.payload.length; index++) {
        state.positions.push(action.payload[index]);
      }
    });
    builder.addCase(getPositionsThunk.rejected, (state, action) => {
      state.system.loading = false;
      state.system.error = action.payload;
    });
  },
});

export const { setPage, clearUsers, closeSuccess } = usersSlice.actions;

export default usersSlice.reducer;

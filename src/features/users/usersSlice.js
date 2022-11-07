import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "John Doe" },
  { id: "1", name: "Bawantha" },
  { id: "3", name: "Danushka" },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer;

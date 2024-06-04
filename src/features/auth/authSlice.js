import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: null,
};

export const register = createAsyncThunk("auth/register", async (user) => {
    console.log(user);
});

export default authSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

const token = localStorage.getItem("token") || "";
const user = JSON.parse(localStorage.getItem("user")) || null;

const initialState = {
    users: [],
    userId: {},
    user: user,
    token: token,
    isError: false,
    isSuccess: false,
    message: "",
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset: (state) => {
            state.isError = false;
            state.isSuccess = false;
            state.message = "";
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.message = action.payload.message;
                state.isSuccess = true;
            })
            .addCase(login.rejected, (state, action) => {
                state.message = action.payload;
                state.isError = true;
            })
            .addCase(logout.fulfilled, (state) => {
                state.user = null;
                state.token = "";
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isSuccess = true;
                state.message = action.payload.message;
            })
            .addCase(register.rejected, (state, action) => {
                state.isSuccess = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(getUserInfo.fulfilled, (state, action) => {
                state.isSuccess = true;
                state.user = action.payload;
            })
            .addCase(getUsers.fulfilled, (state, action) => {
                state.isSuccess = true;
                state.users = action.payload;
            })
            .addCase(getUserById.fulfilled, (state, action) => {
                state.isSuccess = true;
                state.userId = action.payload;
            });
    },
});

export const register = createAsyncThunk(
    "auth/register",
    async (user, thunkAPI) => {
        try {
            return await authService.register(user);
        } catch (error) {
            console.error(error);
            const msgError = error.response.data.message;
            return thunkAPI.rejectWithValue(msgError);
        }
    },
);

export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
    try {
        return await authService.login(user);
    } catch (error) {
        console.error(error.response.data.msg);
        const msgError = error.response.data.msg;
        return thunkAPI.rejectWithValue(msgError);
    }
});

export const logout = createAsyncThunk("auth/logout", async () => {
    try {
        return await authService.logout();
    } catch (error) {
        console.error(error);
    }
});
export const getUserInfo = createAsyncThunk("auth/getUserInfo", async () => {
    try {
        return await authService.getUserInfo();
    } catch (error) {
        console.error(error);
    }
});
export const getUsers = createAsyncThunk("auth/getUsers", async () => {
    try {
        return await authService.getUsers();
    } catch (error) {
        console.error(error);
    }
});
export const getUserById = createAsyncThunk("auth/getUserById", async (id) => {
    try {
        return await authService.getUserById(id);
    } catch (error) {
        console.error(error);
    }
});

export default authSlice.reducer;

export const { reset } = authSlice.actions;

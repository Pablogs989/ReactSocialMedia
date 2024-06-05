import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postsService from "./postsService";
import { act } from "react";

const initialState = {
    posts: [],
    isLoading: false,
    post: {},
    userPosts: []
};


export const getAll = createAsyncThunk("posts/getAll", async () => {
    try {
        return await postsService.getAll();
    } catch (error) {
        console.error(error);
    }
});

export const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAll.fulfilled, (state, action) => {
            state.posts = action.payload;
            state.isLoading = false;
            state.userPosts = action.payload.filter(post => post.userId?._id === JSON.parse(localStorage.getItem("user"))._id)
        });
        builder.addCase(getAll.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getById.fulfilled, (state, action) => {
            state.post = action.payload;
        });

    },
});

export const getById = createAsyncThunk("posts/getById", async (id) => {
    try {
        return await postsService.getById(id);
    } catch (error) {
        console.error(error);
    }
});


export const { reset } = postsSlice.actions;
export default postsSlice.reducer;

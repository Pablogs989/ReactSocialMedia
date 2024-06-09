import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import commentService from "./commentService";

const initialState = {
    post: null,
    isError: false,
    isSuccess: false,
    message: "",
};

export const commentSlice = createSlice({
    name: "comment",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createComment.fulfilled, (state, action) => {
                state.comment = action.payload.postId;
                state.message = "Comment created successfully";
                state.isSuccess = true;
            })
            .addCase(likeComment.fulfilled, (state, action) => {
                state.comment = action.payload.postId;
                state.message = "like added successfully";
                state.isSuccess = true;
            })
            .addCase(deleteComment.fulfilled, (state, action) => {
                state.comment = action.payload.postId;
                state.message = "comment delete successfully";
                state.isSuccess = true;
            })
            .addCase(updateComment.fulfilled, (state, action) => {
                state.comment = action.payload.postId;
                state.message = "comment delete successfully";
                state.isSuccess = true;
            });
    },
});
export const createComment = createAsyncThunk(
    "comment/createComment",
    async (comment) => {
        try {
            return await commentService.createComment(comment);
        } catch (error) {
            return error.response.data;
        }
    },
);
export const likeComment = createAsyncThunk(
    "comment/likeComment",
    async (id) => {
        try {
            return await commentService.likeComment(id);
        } catch (error) {
            return error.response.data;
        }
    },
);
export const dislikeComment = createAsyncThunk(
    "comment/dislikeComment",
    async (id) => {
        try {
            return await commentService.dislikeComment(id);
        } catch (error) {
            return error.response.data;
        }
    },
);
export const deleteComment = createAsyncThunk(
    "comment/deleteComment",
    async (id) => {
        try {
            return await commentService.deleteComment(id);
        } catch (error) {
            return error.response.data;
        }
    },
);
export const updateComment = createAsyncThunk(
    "comment/updateComment",
    async (comment) => {
        try {
            return await commentService.updateComment(comment);
        } catch (error) {
            return error.response.data;
        }
    },
);
export default commentSlice.reducer;
export const { reset } = commentSlice.actions;

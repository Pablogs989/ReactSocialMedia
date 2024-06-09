import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import commentService from "./commentService";

const initialState = {
    comment: null,
    isError: false,
    isSuccess: false,
    message: "",
};

export const commentSlice = createSlice({
    name: "comment",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createComment.fulfilled, (state, action) => {
            state.comment = action.payload;
            state.message = "Comment created successfully";
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

export default commentSlice.reducer;
export const { reset } = commentSlice.actions;

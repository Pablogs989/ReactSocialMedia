import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postsService from "./postsService";

const initialState = {
    posts: [],
    post: null,
    isLoading: false,
    status: "idle",
    error: null,
};

export const getAll = createAsyncThunk("posts/getAll", async () => {
    try {
        return await postsService.getAll();
    } catch (error) {
        console.error(error);
    }
});

export const getById = createAsyncThunk(
    "posts/getById",
    async (id, { rejectWithValue }) => {
        try {
            return await postsService.getById(id);
        } catch (error) {
            console.error(error);
            return rejectWithValue(error.response.data);
        }
    },
);

export const createPost = createAsyncThunk(
    "posts/createPost",
    async (postData, { rejectWithValue }) => {
        try {
            return await postsService.createPost(postData);
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    },
);

export const deletePost = createAsyncThunk(
    "posts/deletePost",
    async (postId, { rejectWithValue }) => {
        try {
            await postsService.deletePost(postId);
            return postId;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    },
);

export const likePost = createAsyncThunk(
    "posts/likePost",
    async (postId, { rejectWithValue }) => {
        try {
            await postsService.likePost(postId);
            return postId;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    },
);
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

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAll.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAll.fulfilled, (state, action) => {
                state.posts = action.payload;
                state.isLoading = false;
            })
            .addCase(getAll.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
            .addCase(getById.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.post = action.payload;
                state.isLoading = false;
            })
            .addCase(getById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(createPost.pending, (state) => {
                state.status = "loading";
            })
            .addCase(createPost.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.posts.push(action.payload);
            })
            .addCase(createPost.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })
            .addCase(deletePost.pending, (state) => {
                state.status = "loading";
            })
            .addCase(deletePost.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.posts = state.posts.filter(
                    (post) => post._id !== action.payload,
                );
            })
            .addCase(deletePost.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })
            .addCase(likePost.pending, (state) => {
                state.status = "loading";
            })
            .addCase(likePost.fulfilled, (state, action) => {
                state.status = "succeeded";
            })
            .addCase(likePost.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })
            .addCase(createComment.fulfilled, (state, action) => {
                state.comment = action.payload.postId;
                state.message = "Comment created successfully";
                state.isSuccess = true;
            })
            .addCase(likeComment.fulfilled, (state, action) => {
                state.comment = action.payload.post;
                state.message = "like added successfully";
                state.isSuccess = true;
            })
            .addCase(deleteComment.fulfilled, (state, action) => {
                state.post = action.payload.postId;
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

export default postsSlice.reducer;

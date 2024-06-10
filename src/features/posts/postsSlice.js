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
            return await postsService.likePost(postId);
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    },
);

export const dislikePost = createAsyncThunk(
    "posts/dislikePost",
    async (postId, { rejectWithValue }) => {
        try {
            return await postsService.dislikePost(postId);
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    },
);
export const createComment = createAsyncThunk(
    "posts/createComment",
    async (comment) => {
        console.log(comment);
        try {
            return await postsService.createComment(comment);
        } catch (error) {
            return error.response.data;
        }
    },
);
export const likeComment = createAsyncThunk("posts/likeComment", async (id) => {
    try {
        return await postsService.likeComment(id);
    } catch (error) {
        return error.response.data;
    }
});
export const dislikeComment = createAsyncThunk(
    "posts/dislikeComment",
    async (id) => {
        try {
            return await postsService.dislikeComment(id);
        } catch (error) {
            return error.response.data;
        }
    },
);
export const deleteComment = createAsyncThunk(
    "posts/deleteComment",
    async (id) => {
        try {
            return await postsService.deleteComment(id);
        } catch (error) {
            return error.response.data;
        }
    },
);
export const updateComment = createAsyncThunk(
    "posts/updateComment",
    async (comment) => {
        try {
            return await postsService.updateComment(comment);
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
                state.post = action.payload
                state.status = 'succeeded';
            })
            .addCase(likePost.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })
            .addCase(dislikePost.pending, (state) => {
                state.status = "loading";
            })
            .addCase(dislikePost.fulfilled, (state, action) => {
                state.post = action.payload;
                state.status = "succeeded";
            })
            .addCase(dislikePost.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })
            .addCase(createComment.fulfilled, (state, action) => {
                state.post = action.payload;
                state.message = "Comment created successfully";
                state.isSuccess = true;
                state.isLoading = false;
            })
            .addCase(createComment.pending, (state) => {
                state.message = "is Loading";
                state.isLoading = true;
            })
            .addCase(likeComment.fulfilled, (state, action) => {
                state.post = action.payload;
                state.message = "like added successfully";
                state.isSuccess = true;
                state.isLoading = false;
            })
            .addCase(dislikeComment.fulfilled, (state, action) => {
                state.post = action.payload;
                state.message = "dislike added successfully";
                state.isSuccess = true;
                state.isLoading = false;
            })
            .addCase(deleteComment.fulfilled, (state, action) => {
                state.post = action.payload;
                state.message = "comment delete successfully";
                state.isSuccess = true;
                state.isLoading = false;
            })
            .addCase(updateComment.fulfilled, (state, action) => {
                state.post = action.payload;
                state.message = "comment delete successfully";
                state.isSuccess = true;
            });
    },
});

export default postsSlice.reducer;

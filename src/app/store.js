import { configureStore } from "@reduxjs/toolkit";
import auth from "../features/auth/authSlice";
import posts from "../features/posts/postsSlice";
import comment from "../features/comment/commentSlice";

export const store = configureStore({
    reducer: {
        auth,
        posts,
        comment,
    },
});

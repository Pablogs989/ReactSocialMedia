import React, { useEffect } from "react";
import Post from "../Post/Post";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../../features/auth/authSlice";
import { getAll } from "../../features/posts/postsSlice";

const Following = () => {
  const { user } = useSelector((state) => state.auth);
  const { isLoading, posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAll());
    console.log(user);
  
    const followingPosts = posts.filter((post) =>
     post.userId._id === user.following
    );
  }, []);

  //console.log(followingPosts);

  if (!user) {
    return <Spin />;
  }

  return (
    <div className="divNavContainer">
      <h1>Following</h1>
      <Post posts={user.postsId} />
    </div>
  );
};

export default Following;

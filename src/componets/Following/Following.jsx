import React, { useEffect, useState } from "react";
import Post from "../Post/Post";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../features/posts/postsSlice";
import "./Following.scss";


const Following = () => {
  const { user } = useSelector((state) => state.auth);
  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);
  const followings = user.following;
  const followedUserIds = followings.map(followed => followed._id);

  const postsIds = posts.filter(post => followedUserIds.includes(post.userId?._id))
  
  
  
  if (!user) {
    return <Spin />;
  }

  return (
    <div className="divNavContainer">
      <div class="header">

      <h1>Following</h1>
      </div>
      <Post posts={postsIds} />
    </div>
  );
};

export default Following;

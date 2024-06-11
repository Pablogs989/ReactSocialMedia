import React, { useEffect, useState } from "react";
import Post from "../Post/Post";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../features/posts/postsSlice";

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
      <h1>Following</h1>
      
      <Post posts={postsIds} />
    </div>
  );
};

export default Following;

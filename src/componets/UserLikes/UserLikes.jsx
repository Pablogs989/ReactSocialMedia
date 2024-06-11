import React from "react";
import { Spin } from "antd";
import Post from "../Post/Post";

const LikedPosts = ({ likedPosts }) => {
  if (!likedPosts || likedPosts.length === 0) {
    return <div>No liked posts found.</div>;
  }

  return (
    <div className="likedPostsContainer">
        <Post posts={likedPosts} />
      
    </div>
  );
};

export default LikedPosts;

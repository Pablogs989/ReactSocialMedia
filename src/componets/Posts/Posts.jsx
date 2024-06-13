import React, { useEffect, useState } from "react";
import Post from "../Post/Post";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../features/posts/postsSlice";
import { Input } from "antd";
import "./Posts.scss";

const Posts = () => {
  const { isLoading, posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);

  if (isLoading) {
    return <h1>Loading posts...</h1>;
  }

  let filteredPosts = [];
  if (posts) {
    filteredPosts = posts.filter((post) =>
      post.text.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  return (
    <div className="postComponentContainer">
      <div className="inputSearchPostsDiv">
        <Input
          type="text"
          placeholder="Search by post text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="postsDivContainer">
        {posts === undefined ? (
          <p>Posts not loading</p>
        ) : filteredPosts.length > 0 ? (
          <Post posts={filteredPosts} />
        ) : (
          <p>Posts not foun</p>
        )}
      </div>
    </div>
  );
};

export default Posts;

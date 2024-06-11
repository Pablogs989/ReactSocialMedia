import React, { useEffect, useState } from "react";
import Post from "../Post/Post";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../features/posts/postsSlice";
import "./Posts.scss";
import { Input } from "antd";

const Posts = () => {
  const { isLoading, posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);

  if (isLoading) {
    return <h1>Cargando posts...</h1>;
  }

  const filteredPosts = posts.filter((post) =>
    post.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          <Post posts={filteredPosts} />
      </div>
    </div>
  );
};

export default Posts;

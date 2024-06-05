import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Post.scss";

const Post = () => {
  const { posts } = useSelector((state) => state.posts);

  const post = posts.map((post) => {
    console.log(post.userId);
    if (!post.userId) return null;

    if (post.image === null || post.image === "" || post.image === undefined) {
      console.log(!post.userId);
      return (
        <div className="card" key={post._id}>
          <Link to={"/post/" + post._id}>
            <p className="card-body">{post.text}</p>
            <p className="footer">
              Written by <span className="by-name">{post.userId.name}</span> on{" "}
              <span className="date">{post.createdAt.slice(0, 10)}</span>
            </p>
          </Link>
        </div>
      );
    } else {
      return (
        <div className="card" key={post._id}>
          <Link to={"/post/" + post._id}>
            <div className="card-image">
              <img className="img"
                src={"http://localhost:8080/public/posts/" + post.image}
              ></img>
            </div>
            <p className="card-body">{post.text}</p>
            <p className="footer">
              Written by <span className="by-name">{post.userId.name}</span> on{" "}
              <span className="date">{post.createdAt.slice(0, 10)}</span>
            </p>
          </Link>
        </div>
      );
    }
  });
  return <div>{post}</div>;
};

export default Post;

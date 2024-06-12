import React from "react";
import { Link } from "react-router-dom";
import "./Post.scss";
import { Spin } from "antd";

const Post = ({ posts }) => {
  if (!posts) return <Spin />;

  const post = posts.map((post) => {
    if (!post.userId) return null;
    return (
      <div key={post._id} className="containerPostCart">
        <div className="postCard">
          <Link to={"/post/" + post._id} className="text">
            {post.image && (
              <div className="card-image">
                <img
                  className="imgPostCard"
                  src={"http://localhost:8080/public/posts/" + post.image}
                  alt="Post"
                />
              </div>
            )}
            <div className="postCardBody"> <p>{post.text}</p> </div>
            <div className="footerCard">
              <Link to={"/user/" + post.userId._id} className="by-name">
                Written by {post.userId.name}
              </Link>{" "}
              <span>on {post.createdAt.slice(0, 10)} </span>
            </div>
          </Link>
        </div>
      </div>
    );
  });
  return <>{post}</>;
};

export default Post;

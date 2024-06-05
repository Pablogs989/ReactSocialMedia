import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

import "./Post.scss";

const Post = () => {
  const { posts, userPosts } = useSelector((state) => state.posts);
  const location = useLocation();
  const [postsArray, setPostsArray] = useState([]);

  useEffect(() => {
    switch (location.pathname) {
      case "/following":
      case "/profile":
        setPostsArray(userPosts);
        break;
      case "/":
        setPostsArray(posts);
        break;
      default:
        break;
    }
  }, [location.pathname, posts, userPosts]);

  return (
    <div className="post-container">
      {postsArray.map((post) => {
        if (!post.userId) return null;

        return (
          <div className="card" key={post._id}>
            <Link to={"/post/" + post._id}>
              {post.image && (
                <div className="card-image">
                  <img
                    className="img"
                    src={"http://localhost:8080/public/posts/" + post.image}
                    alt="Post"
                  />
                </div>
              )}
              <p className="card-body">{post.text}</p>
              <p className="footer">
                Written by <span className="by-name">{post.userId.name}</span>{" "}
                on <span className="date">{post.createdAt.slice(0, 10)}</span>
              </p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Post;

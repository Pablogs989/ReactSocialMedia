import React from "react";
import { Link } from "react-router-dom";
import "./Post.scss";

const Post = ({ posts }) => {
  const post = posts.map((post) => {
    if (!post.userId) return null;
    return (
      <div key={post._id} className="containerPostCart">
      <div className="card" >
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
          <div className="card-body">{post.text}  </div>
          <div className="footer">
            <div className="by-name">Written by  {post.userId.name} </div> <span>on{" "}{post.createdAt.slice(0, 10)} </span>
          </div>
        </Link>
      </div>
      </div>

    );
  }
  );
  return <>{post}</>;
};

export default Post;

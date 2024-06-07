import React from "react";
import { Link } from "react-router-dom";
import "./Post.scss";

const Post = ({ posts }) => {
  const post = posts.map((post) => {
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
          <div className="card-body">{post.text} Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, dolore assumenda. Eveniet deleniti magnam nostrum porro modi, provident aut animi, facilis veniam, fuga perspiciatis asperiores sed deserunt sapiente labore commodi! </div>
          <div className="footer">
            <div className="by-name">Written by  {post.userId.name} </div> <span>on{" "} </span>
            <div className="date"> {post.createdAt.slice(0, 10)}</div>
          </div>
        </Link>
      </div>
    );
  }
  );
  return <>{post}</>;
};

export default Post;

import React from "react";
import { Link } from "react-router-dom";
import "./Post.scss";
import { Col, Row, Spin, Statistic } from "antd";
import Comment from "../Comment/Comment";

const Post = ({ posts }) => {
  
  const post = posts.map((post) => {
    if (!post.userId) return null;
    return (
      <div key={post._id} className="containerPostCart">
      <div className="postCard" >
        <Link to={"/post/" + post._id}>
            {post.image && (
          <div className="card-image">
              <img
                className="imgPostCard"
                src={"http://localhost:8080/public/posts/" + post.image}
                alt="Post"
              />
          </div>
            )}
          <div className="postCardBody">{post.text}  </div>
          <div className="footerCard">
            <div className="by-name">Written by  {post.userId.name} </div> <span>on{" "}{post.createdAt.slice(0, 10)} </span>
          </div>
        </Link>
        {/* <Comment post={post} /> */}
      </div>
     


      </div>

    );
  }
  );
  return <>{post}</>;
};

export default Post;

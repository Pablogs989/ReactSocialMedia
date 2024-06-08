import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getById } from "../../features/posts/postsSlice";

const PostDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { post } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getById(id));
  }, []);

  console.log(post);
  
  return (
    <div>
      {post.image && (
        <div className="card-image">
          <img
            className="img"
            src={"http://localhost:8080/public/posts/" + post.image}
            alt="Post"
          />
        </div>
      )}
      <div className="card-body">
        {post.text}
      </div>
      <div className="footer">
        <div className="by-name">Written by {post.userId.name} </div>{" "}
        <span>on </span>
        <div className="date"> {post.createdAt.slice(0, 10)}</div>
      </div>
    </div>
  );
};

export default PostDetail;

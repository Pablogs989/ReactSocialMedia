import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getById,
  deletePost,
  likePost,
  dislikePost,
} from "../../features/posts/postsSlice";
import { useNavigate } from "react-router-dom";
import DeleteConfirmation from "../DeleteConfirmation/DeleteConfirmation";
import {
  HeartFilled,
  HeartOutlined,
} from "@ant-design/icons";
import Comment from "../Comment/Comment";
import "./PostDetail.scss";
import { Modal } from "antd";

const PostDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const post = useSelector((state) => state.posts.post);
  const isLoading = useSelector((state) => state.posts.isLoading);
  const error = useSelector((state) => state.posts.error);
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const isLiked = user && post ? post.likes.includes(user._id) : false;

  const handleDelete = () => {
    dispatch(deletePost(post._id));
    setShowConfirmation(false);
    navigate("/profile");
  };

  useEffect(() => {
    dispatch(getById(id));
  }, [dispatch, id]);

  if (!post) return <div className="loading">Loading...</div>;
  if (isLoading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="containerPostDetailContainer">   

    
    <div className="postDetailContainer">
      <div className="postDetailDivContainer">
        <div className="postDetailBody">
          <div className="cardPostDetailBody">
          <div className="postDetailHeader">
        <h1>{post.title}</h1>
          </div>
          {post.image && (
                <div className="card-image">
                  <img
                    className="img"
                    src={"http://localhost:8080/public/posts/" + post.image}
                    alt="Post"
                  />
                </div>
                )}
              <div className="postDetailText">
                <p>{post.text}</p>
              </div>
             
            </div>

                <div className="postDetailDate">
        <p>Created on: {post.createdAt.slice(0, 10)}</p>
      </div>
      <div className="postActions">
        {user && (
          isLiked ? (
            <div className="actionButton">
              <HeartFilled onClick={() => dispatch(dislikePost(post._id))} />
              <span className="likeCount">{post.likes.length}</span>
            </div>
          ) : (
            <div className="actionButton">
              <HeartOutlined onClick={() => dispatch(likePost(post._id))} />
              <span className="likeCount">{post.likes.length}</span>
            </div>
          )
        )}
      </div>
      {user && post.userId === user._id && (
        <div className="deleteButtonContainer">
          <button onClick={() => setShowConfirmation(true)}>Eliminar</button>
          {showConfirmation && (
            <DeleteConfirmation
              onCancel={() => setShowConfirmation(false)}
              onDelete={handleDelete}
            />
          )}
        </div>
      )}
      </div>
          </div>
      
      <div className="commentSection">
        <Comment post={post} />
      </div>
    </div>
    </div>
    

  );
};

export default PostDetail;

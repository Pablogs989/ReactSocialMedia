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
  HeartTwoTone,
  EditOutlined,
  DeleteOutlined,
  HeartFilled,
  HeartOutlined,
} from "@ant-design/icons";
import Comment from "../Comment/Comment";

const PostDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const post = useSelector((state) => state.posts.post);
  const isLoading = useSelector((state) => state.posts.isLoading);
  const error = useSelector((state) => state.posts.error);
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const isLiked = user ? post.likes.includes(user._id) : false;

  const handleDelete = () => {
    dispatch(deletePost(post._id));
    setShowConfirmation(false);
    navigate("/profile");
  };

  useEffect(() => {
    dispatch(getById(id));
  }, [dispatch, id]);

  if (!post) return <div>Loading...</div>;
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.text}</p>
      {post.image && (
        <div className="card-image">
          <img
            className="img"
            src={"http://localhost:8080/public/posts/" + post.image}
            alt="Post"
          />
        </div>
      )}
      <p>Created on: {post.createdAt.slice(0, 10)}</p>

      {user && (
        isLiked ? (
          <div>
            <HeartFilled onClick={() => dispatch(dislikePost(post._id))} />
            {post.likes.length}
          </div>
        ) : (
          <div>
            <HeartOutlined onClick={() => dispatch(likePost(post._id))} />
          </div>
        )
      )}

      {user && post.userId === user._id && (
        <div>
          <button onClick={() => setShowConfirmation(true)}>Eliminar</button>
          {showConfirmation && (
            <DeleteConfirmation
              onCancel={() => setShowConfirmation(false)}
              onDelete={handleDelete}
            />
          )}
        </div>
      )}
      <Comment post={post} />
    </div>
  );
};

export default PostDetail;

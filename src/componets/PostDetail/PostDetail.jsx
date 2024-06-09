import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getById } from "../../features/posts/postsSlice";
import Comment from "../Comment/Comment";

const PostDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { post } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getById(id));
  }, []);

  return (
    <div>
      <h1>PostDetail</h1>
      <p>{post._id}</p>
      <p>{post.text}</p>
      <Comment post={post}/>

    </div>
  );
};

export default PostDetail;

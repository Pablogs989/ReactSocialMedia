import React, { useEffect } from "react";
import Post from "../Post/Post";
import { useDispatch, useSelector } from "react-redux";
import { getAll, reset } from "../../features/posts/postsSlice";
const Posts = () => {
  const { isLoading ,posts} = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAll());
  }, []);

  if (isLoading) {
    return <h1>Cargando posts...</h1>;
  }

  return (
    <div>
      <Post posts={posts}/>
    </div>
  );
};

export default Posts;

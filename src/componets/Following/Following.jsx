import React, { useEffect, useState } from "react";
import Post from "../Post/Post";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../features/posts/postsSlice";

const Following = () => {
  const { user } = useSelector((state) => state.auth);
  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const [followingPosts, setFollowingPosts] = useState([]);

  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);
  const followings = user.following;
  const followedUserIds = followings.map(followed => followed._id);

  const postsIds = posts.filter(post => followedUserIds.includes(post.userId?._id))
  ;
  console.log("postsIds", postsIds);
  console.log("following", followings);
  console.log("posts", posts)
  ;
  
  
  if (!user) {
    return <Spin />;
  }

  return (
    <div className="divNavContainer">
      <h1>Following</h1>
      
      <Post posts={postsIds} />
    </div>
  );
};

export default Following;

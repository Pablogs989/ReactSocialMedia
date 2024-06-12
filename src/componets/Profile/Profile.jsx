import React, { useEffect, useState } from "react";
import { Spin } from "antd";
import UserInfo from "../UserInfo/UserInfo";
import Post from "../Post/Post";
import UserLikes from "../UserLikes/UserLikes";
import "./Profile.scss";
import { getAll } from "../../features/posts/postsSlice";
import { useDispatch, useSelector } from "react-redux";

const Profile = ({ user }) => {
  const [selectedOption, setSelectedOption] = useState("posts");
  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);

  if (!user) {
    return <Spin />;
  }

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const likedPosts = [];
  posts.forEach((post) => {
    post.likes.forEach((like) => {
      if (user._id === like) {
        likedPosts.push(post);
      }
    });
  });
  console.log(likedPosts);

  return (
    <div className="profileDivContainer">
      <div className="userInfoProfileDiv">
        <UserInfo user={user} />
      </div>
      <div className="radioInputsProfile">
        <label className="radio">
          <input
            type="radio"
            name="radio"
            value="posts"
            checked={selectedOption === "posts"}
            onChange={handleOptionChange}
          />
          <span className="name">Posts</span>
        </label>
        <label className="radio">
          <input
            type="radio"
            name="radio"
            value="likes"
            checked={selectedOption === "likes"}
            onChange={handleOptionChange}
          />
          <span className="name">Likes</span>
        </label>
      </div>
      {selectedOption === "posts" && (
        <div className="postProfileDiv">
          <Post posts={user.postsId} />
        </div>
      )}
      {selectedOption === "likes" && (
        <div className="postProfileDiv">
          <UserLikes likedPosts={likedPosts} />
        </div>
      )}
    </div>
  );
};

export default Profile;

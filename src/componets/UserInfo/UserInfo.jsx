import React, { useRef, useState } from "react";
import { Spin, Modal } from "antd";
import "./UserInfo.scss";
import { useDispatch, useSelector } from "react-redux";
import { updatePic } from "../../features/auth/authSlice";
import UserCard from "../UserCard/UserCard";
import EditProfile from "../EditProfile/EditProfile";

const UserInfo = ({ user }) => {
  const { user: logged } = useSelector((state) => state.auth);

  const [isModalOpenFollowers, setIsModalOpenFollowers] = useState(false);
  const [isModalOpenFollowings, setIsModalOpenFollowings] = useState(false);
  const [isModalOpenEdit, setIsModalOpenEdit] = useState(false);

  const showModalFollowers = () => {
    setIsModalOpenFollowers(true);
  };

  const showModalFollowings = () => {
    setIsModalOpenFollowings(true);
  };

  const handleCancelFollowers = () => {
    setIsModalOpenFollowers(false);
  };

  const handleCancelFollowings = () => {
    setIsModalOpenFollowings(false);
  };

  const showModalEdit = () => {
    setIsModalOpenEdit(true);
  };

  const handleCancelEdit = () => {
    setIsModalOpenEdit(false);
  };
  const dispatch = useDispatch();
  const inputFileRef = useRef(null);

  const handleImageClick = () => {
    if (logged._id === user._id) {
      inputFileRef.current.click();
    } else {
      console.log("You can't change the profile picture of another user");
    }
  };

  const handleFileChange = (event) => {
    const formdata = new FormData();
    formdata.set("profilePic", event.target.files[0]);
    try {
      dispatch(updatePic(formdata));
    } catch (error) {
      console.error(error);
      notification.error({
        message: "we have some troubles uploading your picture",
      });
    }
  };

  if (!user) {
    return <Spin />;
  }

  const followers = user.followers;
  const followings = user.following;

  return (
    <>
      <div className="userInfoContainer">
        <div className="userNameDiv" onClick={showModalEdit}>
          {user.name}
        </div>
        <Modal open={isModalOpenEdit} footer={null} onCancel={handleCancelEdit}>
          <EditProfile />
        </Modal>
        <div className="userInfoDivContainer">
          <div className="userAvatarDiv">
            <img
              className="profileImg"
              src={`http://localhost:8080/public/users/${user.profilePic}`}
              alt="profilePic"
              onClick={handleImageClick}
            />
            <input
              type="file"
              ref={inputFileRef}
              className="hidden-input"
              onChange={handleFileChange}
            />
          </div>
          <div className="userPostsDiv">
            {user.postsId.length}
            <p>Posts</p>
          </div>
          <div className="userFollowersDiv" onClick={showModalFollowers}>
            {user.followers.length}
            <p>followers</p>
          </div>
          <div className="userFollowingDiv" onClick={showModalFollowings}>
            {user.following.length}
            <p>following</p>
          </div>
        </div>
      </div>
      <Modal
        title="Your Followers"
        open={isModalOpenFollowers}
        footer={null}
        onCancel={handleCancelFollowers}
      >
        <UserCard users={followers} />
      </Modal>
      <Modal
        title="You are following"
        open={isModalOpenFollowings}
        footer={null}
        onCancel={handleCancelFollowings}
      >
        <UserCard users={followings} />
      </Modal>
    </>
  );
};

export default UserInfo;

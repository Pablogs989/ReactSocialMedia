import React, { useRef, useState } from 'react';
import { Spin } from 'antd';
import './UserInfo.scss';
import { useDispatch } from 'react-redux';
import {getUserById, updatePic}  from "../../features/auth/authSlice"

const UserInfo = ({ user }) => {
    const dispatch = useDispatch();
const inputFileRef = useRef(null);

const handleImageClick = () => {
    inputFileRef.current.click(); 
};

const handleFileChange = (event) => {
    const formdata = new FormData();
    formdata.set('profilePic', event.target.files[0]);
    try {
        dispatch(updatePic(formdata))

    } catch (error) {
        
      console.error(error);
      notification.error({ message: "Failed to create post" });
    }
    
    
};

if (!user) {
    return <Spin />;
}

console.log(user.profilePic);

return (
    <>
    <div className='userInfoContainer'>
        <div className='userNameDiv'>{user.name}</div>
        <div className='userInfoDivContainer'>
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
        <div className="userFollowersDiv">
            {user.followers.length}
            <p>followers</p>
        </div>
        <div className="userFollowingDiv">
            {user.following.length}
            <p>following</p>
        </div>
        </div>
    </div>
    </>
);
};

export default UserInfo;

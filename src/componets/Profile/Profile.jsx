import { Spin } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserInfo from "../UserInfo/UserInfo";
import "./Profile.scss";
import Post from "../Post/Post";


const Profile = ({user}) => {
 
  if (!user) {
    return <Spin />;
  }
  return (

    
    <div className='profileDivContainer'>
      <div className="userInfoProfileDiv">
        <UserInfo user={user}/>
      </div>
      <div className="postProfileDiv">
        <Post posts={user.postsId}/>
      </div>
    </div>

  )
}

export default Profile;

import { Spin } from "antd";
import React from "react";
import UserInfo from "../UserInfo/UserInfo";
import "./Profile.scss";
import Post from "../Post/Post";
import { useParams } from "react-router-dom";


const Profile = ({user}) => {
  const {id} = useParams()
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

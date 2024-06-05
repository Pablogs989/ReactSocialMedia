import React from 'react'
import { useSelector } from 'react-redux'
import profile  from  "../../assets/profile.jpeg"
import { Spin } from 'antd';
import './UserInfo.scss'

const UserInfo = () => {
    const  { user } = useSelector((state)=>state.auth)
  
    if (!user) {
        return <Spin />;
      }
    
  return (
    <div className='userInfoDivContainer'>
        <div className="userAvatarDiv">
            <img className="profileImg" src={profile} alt="" />
            <p>{user.name}</p>
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
    
  )
}

export default UserInfo
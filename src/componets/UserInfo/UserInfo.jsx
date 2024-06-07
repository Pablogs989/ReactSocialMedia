import React from 'react'
import { useSelector } from 'react-redux'
import { Spin } from 'antd';
import './UserInfo.scss'

const UserInfo = ({user}) => {

    if (!user) {
        return <Spin />;
}
    console.log(user.profilePic);
  return (
    <>  
    <div className='userInfoContainer' >
        <div className='userNameDiv'>{user.name}</div>
        <div className='userInfoDivContainer'>
        <div className="userAvatarDiv">
            <img className="profileImg" src={"http://localhost:8080/public/users/"+ user.profilePic} alt="profilePic" />
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
  )
}

export default UserInfo
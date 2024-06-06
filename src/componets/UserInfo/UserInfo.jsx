import React from 'react'
import { useSelector } from 'react-redux'
import { Spin } from 'antd';
import './UserInfo.scss'
import Post from '../Post/Post';

const UserInfo = () => {
    //hay que pasar por props el usuario, pero falla al buscar los posts en profile
    
    const  { user } = useSelector((state)=>state.auth)

    if (!user) {
        return <Spin />;
      }
    
  return (
    <div className='userInfoDivContainer'>
        <div className="userAvatarDiv">
            <img className="profileImg" src="" alt="" />
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
import { Spin } from 'antd';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UserInfo from '../UserInfo/UserInfo';
import './Profile.scss';
import { getUserInfo } from '../../features/auth/authSlice';
import Post from '../Post/Post';
import GetUsers from '../GetUsers/GetUsers';

const Profile = () => {
  const  { user } = useSelector((state)=>state.auth)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch((getUserInfo()))
  }, 
  [])
  if (!user) {
    return <Spin />;
  }
  return (
    <div className='profileDivContainer'>
      <UserInfo/>
      <div className="postProfileDiv">

      <Post posts={user.postsId}/>
      </div>
    
    </div>
  )
}

export default Profile
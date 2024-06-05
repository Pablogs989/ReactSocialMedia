import { Spin } from 'antd';
import React from 'react'
import { useSelector } from 'react-redux'
import UserInfo from '../UserInfo/UserInfo';
import './Profile.scss';

const Profile = () => {
  const  { user } = useSelector((state)=>state.auth)
  
  if (!user) {
    return <Spin />;
  }
  return (
    <div className='profileDivContainer'>
      <UserInfo/>
      
    
    </div>
  )
}

export default Profile
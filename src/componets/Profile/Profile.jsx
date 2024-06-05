import { Spin } from 'antd';
import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
  const  { user } = useSelector((state)=>state.auth)
  
  if (!user) {
    return <Spin />;
  }
  return (
    <div className='profileDivContainer'>
      <h1>Profile</h1>
      <p>{user.name}</p>
      <p>{user.email}</p>
    </div>
  )
}

export default Profile
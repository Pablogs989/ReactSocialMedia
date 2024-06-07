import React from 'react'
import { useSelector } from 'react-redux';
import Profile from '../Profile/Profile';

const LoggedUserProfile = () => {

    const { user } = useSelector((state) => state.auth);

  return (
   <>
   
   <Profile user={user}/>
   </>
  )
}

export default LoggedUserProfile
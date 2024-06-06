import React, { useEffect } from 'react'
import Profile from '../Profile/Profile'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserById } from '../../features/auth/authSlice';
import UserInfo from '../UserInfo/UserInfo';

const GeneralUserProfile = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { userId:user } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(getUserById(id));
      }, []);
      console.log(user);

      if(!user){
        return <p>Loading...</p>
      }
  return (
    <>
        <Profile user={user}/>
    </>
  )
}

export default GeneralUserProfile
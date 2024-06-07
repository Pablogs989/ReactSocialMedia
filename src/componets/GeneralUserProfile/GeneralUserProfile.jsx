import React, { useEffect } from 'react'
import Profile from '../Profile/Profile'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserById } from '../../features/auth/authSlice';

const GeneralUserProfile = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { userId:user, isLoading } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(getUserById(id));
      }, []);
      console.log(user);
      if (isLoading) {
        return <h1>Cargando user...</h1>;
      }
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
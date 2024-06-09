import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../../features/auth/authSlice'
import UserCard from '../UserCard/UserCard'
import "./GetUsers.scss"
import { Link } from 'react-router-dom'

const GetUsers = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsers())
    }, [])
const {users} = useSelector((state) => state.auth)
  return (
    <div className='getUsersDivContainer'>
        <div className="userCard">
          <p className="titleUserCard">Who to follow</p>
          <div>
          <UserCard users={users}/>
    
          </div>
          <a className="moreUserCard" href="#">See more</a>
        </div>
      
    </div>
  )
}

export default GetUsers
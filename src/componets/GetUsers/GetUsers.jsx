import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getUsers } from '../../features/auth/authSlice'
import UserCard from '../UserCard/UserCard'

const GetUsers = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsers())
    }, [])

  return (
    <div><UserCard/></div>
  )
}

export default GetUsers
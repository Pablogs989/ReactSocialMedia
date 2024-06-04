import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../../features/auth/authSlice'

const SideBar = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth) 

  
  return (
<>
  <div>
    <div><Link to="/">Home</Link></div>
    {user ?
    <>
      <div onClick={() => {
            dispatch(logout());
          }}>Logout</div>
      <div><Link to="/profile">Profile</Link></div>
    </> : 
    <>
      <div><Link to="/register">Register</Link></div>
      <div><Link to="/login">Login</Link></div>
    </> 
  }


  </div>
</>
  )
}

export default SideBar
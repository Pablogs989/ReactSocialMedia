import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
<>
  <div>
    <Link to="/"><div>Home</div></Link>
    <Link to="/profile"><div>Profile</div></Link>
    <Link to="/register"><div>Register</div></Link>
    <Link to="/login"><div>Login</div></Link>

  </div>
</>
  )
}

export default SideBar
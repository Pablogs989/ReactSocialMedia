import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../../features/auth/authSlice'
import './SideBar.scss'

const SideBar = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth) 

  
  return (
<>

<div id="navbody">
  <form action="#">
    <div className="ul">
      
        <div className="li"><Link to="/">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="svg w-6 h-6 text-gray-800 dark:text-white"
          >
            <path
              d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
              stroke-width="2"
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke="currentColor"
            ></path>
          </svg>
          </Link>
        </div>
  
      
        <div className="li">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="svg w-6 h-6 text-gray-800 dark:text-white"
          >
            <path
              d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
              stroke-width="2"
              stroke-linecap="round"
              stroke="currentColor"
            ></path>
          </svg>
        </div>
   
        <div className="li">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="svg w-6 h-6 text-gray-800 dark:text-white"
          >
            <path
              d="m17 21-5-4-5 4V3.889a.92.92 0 0 1 .244-.629.808.808 0 0 1 .59-.26h8.333a.81.81 0 0 1 .589.26.92.92 0 0 1 .244.63V21Z"
              stroke-width="2"
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke="currentColor"
            ></path>
          </svg>
        </div>
      
        <div className="li"><Link to="/profile">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="svg w-6 h-6 text-gray-800 dark:text-white"
          >
            <path
              d="M10 19H5a1 1 0 0 1-1-1v-1a3 3 0 0 1 3-3h2m10 1a3 3 0 0 1-3 3m3-3a3 3 0 0 0-3-3m3 3h1m-4 3a3 3 0 0 1-3-3m3 3v1m-3-4a3 3 0 0 1 3-3m-3 3h-1m4-3v-1m-2.121 1.879-.707-.707m5.656 5.656-.707-.707m-4.242 0-.707.707m5.656-5.656-.707.707M12 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              stroke-width="2"
              stroke-linejoin="round"
              stroke-linecap="square"
              stroke="currentColor"
            ></path>
          </svg>
          </Link>
        </div>
      
    </div>
  </form>
      </div>
  <div>

    {user ?
    <>
      <div onClick={() => {
            dispatch(logout());
          }}>Logout</div>
      <div></div>
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
import React from 'react'
import fondo from '../assets/screen/thunder.png'
import './NotFound.scss'
const NotFound = () => {
  return (
    <div className="notFoundContainer">
      <img className="notFoundImg"src={fondo} alt="404" />
      <h1>404 Page not found</h1>
    </div>
  )
}

export default NotFound
import React from 'react'
import "./UserCard.scss"

const UserCard = () => {
  return (
    <div class="card">
  <p class="title">Who to follow</p>
  <div class="user__container">
    <div class="user">
      <div class="image"></div>
      <div class="user__content">
        <div class="text">
          <span class="name">Name</span>
          <p class="username">@namedlorem</p>
        </div>
        <button class="follow">Follow</button>
      </div>
      
    </div> 
    <div class="user">
      <div class="image"></div>
      <div class="user__content">
        <div class="text">
          <span class="name">Name</span>
          <p class="username">@namedlorem</p>
        </div>
        <button class="follow">Follow</button>
      </div>
      
    </div> 
    <div class="user">
      <div class="image"></div>
      <div class="user__content">
        <div class="text">
          <span class="name">Name</span>
          <p class="username">@namedlorem</p>
        </div>
        <button class="follow">Follow</button>
      </div>
      
    </div> 

  </div>
  <a class="more" href="#">See more</a>
    </div>
  )
}

export default UserCard
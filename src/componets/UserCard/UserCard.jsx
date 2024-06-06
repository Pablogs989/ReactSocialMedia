import React from 'react'
import "./UserCard.scss"

const UserCard = () => {
  return (
    <div class="userCard">
      <p class="titleUserCard">Who to follow</p>
      <div class="userCardContainer">
        <div class="userDivCard">
          <div class="imageUserCard"></div>
          <div class="userCardContent">
            <div class="textUserCard">
              <span class="nameUserCard">Name</span>
              <p class="usernameUserCard">@namedlorem</p>
            </div>
            <button class="followUserCard">Follow</button>
          </div>
        </div> 
      </div>
      <a class="more" href="#">See more</a>
    </div>
  )
}

export default UserCard
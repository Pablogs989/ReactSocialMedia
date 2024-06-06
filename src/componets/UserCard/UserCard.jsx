import React from 'react'
import "./UserCard.scss"
import { useSelector } from 'react-redux';

const UserCard = () => {

  const { users } = useSelector((state) => state.auth);

  const user = users.map((user) => { 
    return (
      <div key={user._id} className="userCardContainer">
      <div className="userDivCard">
        <div className="imageUserCard"></div>
        <div className="userCardContent">
          <div className="textUserCard">
            <span className="nameUserCard">{user.name}</span>
            <p className="usernameUserCard">{user.email}</p>
          </div>
          <button className="followUserCard">Follow</button>
        </div>
      </div> 
    </div>

    )

  });


  return (
    <div>

      {user}
    </div>
  )
}

export default UserCard
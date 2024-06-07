import React from 'react'
import "./UserCard.scss"
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { follow, unfollow } from '../../features/auth/authSlice';

const UserCard = () => {
  const handleFollow = (userId) => {
    dispatch(follow(userId))
  console.log(userId);
  }

    const handleUnfollow = (userId) => {
      dispatch(unfollow(userId))
    console.log(userId);
    }

const dispatch = useDispatch();
  const { users } = useSelector((state) => state.auth);

  const user = users.map((user) => { 
    const userId = user._id
    return (
      <div key={user._id} className="userCardContainer">
      <div className="userDivCard"><Link to={"/user/"+ userId}>
        <div className="imageUserCard"></div>
          <div className="userCardContent">
            <div className="textUserCard">
              <span className="nameUserCard">{user.name}</span>
              <p className="usernameUserCard">{user.email}</p>
            </div>
          </div>
        </Link></div> 
        <div className="buttonsDivContainer">
          <button className="followUserCard" onClick={()=>{handleFollow(userId)}}>Follow</button>
          <button className="followUserCard" onClick={()=>{handleUnfollow(userId)}}>Unfollow</button>
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
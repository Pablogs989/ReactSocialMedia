import React from 'react'
import "./UserCard.scss"
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { follow, unfollow } from '../../features/auth/authSlice';


const UserCard = () => {

    const handleFollow = (user) => {
    dispatch(follow(user._id))
    console.log(user._id);
  }

    const handleUnfollow = (user) => {
      dispatch(unfollow(user._id))
      console.log(user._id);
    }
  
const dispatch = useDispatch();
  const { users } = useSelector((state) => state.auth);

  const user = users.map((user) => { 
    return (
      <div key={user._id} className="userCardContainer">
      <div className="userDivCard"><Link to={"/user/"+ user._id}>
        <div className="imageUserCard"></div>
          <div className="userCardContent">
            <div className="textUserCard">
              <span className="nameUserCard">{user.name}</span>
              <p className="usernameUserCard">{user.email}</p>
            </div>
          </div>
        </Link></div> 
        <div className="buttonsDivContainer">
          <button className="followUserCard" onClick={()=>{handleFollow(user)}}>Follow</button>
          <button className="followUserCard" onClick={()=>{handleUnfollow(user)}}>Unfollow</button>
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
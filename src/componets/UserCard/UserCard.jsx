import React, { useState, useEffect } from "react";
import "./UserCard.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { follow, unfollow } from "../../features/auth/authSlice";

const UserCard = ({ users }) => {
  const dispatch = useDispatch();
  const { user: logged } = useSelector((state) => state.auth);
  const [followedUsers, setFollowedUsers] = useState([]);

  useEffect(() => {
    if (logged && logged.following) {
      setFollowedUsers(logged.following);
    }
  }, [logged]);

  const handleFollow = (user) => {
    dispatch(follow(user._id));
  };

  const handleUnfollow = (user) => {
    dispatch(unfollow(user._id));
  };

  return (
    <div>
      {users.map((user) => {
        const isFollowing = logged.following.find(
          (followedUser) => followedUser._id == user._id
        );
        return (
          <div key={user._id} className="userCardContainer">
            <Link to={`/user/${user._id}`}>
              <div className="infoDiv">
                <div className="imageUserCard">
                  <img
                    id="profileImgCard"
                    className="profileImgCard"
                    src={`http://localhost:8080/public/users/${user.profilePic}`}
                    alt="profilePic"
                  />
                </div>
                <div className="textUserCard">
                  <div className="nameUserCard">{user.name}</div>
                </div>
              </div>
            </Link>
            <div className="buttonsDivContainer">
              {isFollowing ? (
                <button
                  className="followUserCard"
                  onClick={() => handleUnfollow(user)}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  className="followUserCard"
                  onClick={() => handleFollow(user)}
                >
                  Follow
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserCard;

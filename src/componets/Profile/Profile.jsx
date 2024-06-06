import { Spin } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserInfo from "../UserInfo/UserInfo";
import "./Profile.scss";
import Post from "../Post/Post";


const Profile = ({user}) => {
  console.log(user);
/// el usuario viene por props
// const { user } = useSelector((state) => state.auth);  
//esta linea ira donde se necesite el usuario en los padres.git
 // const dispatch = useDispatch();

// profil general
// crear dos componetes 
// uno para logged user -->   
// useEffect(() => {
//   dispatch((getUserInfo()))
// }, 
// [])
// otro para general user  ->getuserby id crear estado usergeneral para esta fncion 
  
  if (!user) {
    return <Spin />;
  }
  return (

    
    <div className='profileDivContainer'>
      <div className="userInfoProfileDiv">
        <UserInfo user={user}/>
      </div>
      <div className="postProfileDiv">
        <Post posts={user.postsId}/>
      </div>
    </div>

  )
}

export default Profile;

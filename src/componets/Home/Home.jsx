
import React, { useEffect } from "react";
import Posts from "../Posts/Posts";
import "./Home.scss";
import GetUsers from "../GetUsers/GetUsers";

const Home = () => {

  return (
    <div className="divHomeContainer">
       <div className="divHomePosts">
      <Posts />
      </div>
         <div className="divHomeUsers">
      <GetUsers/>
      </div>
     
   
    </div>
  );
};

export default Home;

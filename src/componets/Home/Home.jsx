
import React, { useEffect } from "react";
import Posts from "../Posts/Posts";
import "./Home.scss";
import GetUsers from "../GetUsers/GetUsers";

const Home = () => {

  return (
    <div className="divNavContainer">
      <div className="divNavPosts">
      <Posts />
      </div>
      <div className="divNavUsers">
      <GetUsers/>
      </div>
    </div>
  );
};

export default Home;

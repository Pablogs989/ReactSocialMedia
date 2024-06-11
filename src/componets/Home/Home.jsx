
import React, { useEffect } from "react";
import Posts from "../Posts/Posts";
import "./Home.scss";
import GetUsers from "../GetUsers/GetUsers";

const Home = () => {
// metraig el estado, hago el filter
// podemos hacer  un estado en e componetnte, followin post set folloeing
// y luego un useEffect
// y pasamos por props
  // aqui hacer filtro y llamo al componnte
  return (
    <div className="divNavContainer">
      <div className="divNav">
      <Posts />
      </div>
      <div className="divNav">
      <GetUsers/>
      </div>
    </div>
  );
};

export default Home;

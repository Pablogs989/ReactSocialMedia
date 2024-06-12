import { Navigate } from "react-router-dom";

const PrivateZone = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user ? children : <Navigate to="/" />;
};

export default PrivateZone;
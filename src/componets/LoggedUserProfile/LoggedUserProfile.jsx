import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Profile from "../Profile/Profile";
import { getUserInfo } from "../../features/auth/authSlice";

const LoggedUserProfile = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);

  return (
    <>
      <Profile user={user} />
    </>
  );
};

export default LoggedUserProfile;

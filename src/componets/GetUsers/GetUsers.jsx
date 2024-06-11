import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../features/auth/authSlice";
import UserCard from "../UserCard/UserCard";
import "./GetUsers.scss";
import { Input } from "antd";

const GetUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.auth.users);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="getUsersDivContainer">
        <div className="searchUserContainer">

        <Input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        </div> 
        <div className="userCard">
          <UserCard users={filteredUsers} />
        </div>
    </div>
  );
};

export default GetUsers;

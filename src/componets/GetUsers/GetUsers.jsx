import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../features/auth/authSlice";
import UserCard from "../UserCard/UserCard";
import { Input } from "antd";
import "./GetUsers.scss";

const GetUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.auth.users);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const filteredUsers = users ? users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  ) : [];

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
        {users === undefined ? (
          <p>Loading users...</p>
        ) : filteredUsers.length > 0 ? (
          <UserCard users={filteredUsers} />
        ) : (
          <p>No users found</p>
        )}
      </div>
    </div>
  );
};

export default GetUsers;

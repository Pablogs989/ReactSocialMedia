import React, { useEffect } from "react";
import {  Dropdown, Space } from 'antd';
import { DownOutlined, FormOutlined, HomeOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../features/auth/authSlice";
import "./SideBar.scss";

const SideBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  const items = [
    {
      label: (
        <div id="logout"
                onClick={() => {
                  dispatch(logout());
                }}
                className="iconsDiv"
              >
                <Link to="/login">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    height="24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="svg w-6 h-6 text-gray-800 dark:text-white"
                  >
                    <path
                      d="M16 6.07026C18.3912 7.45349 20 10.0389 20 13C20 17.4183 16.4183 21 12 21C7.58172 21 4 17.4183 4 13C4 10.0389 5.60879 7.45349 8 6.07026M12 3V13"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                </Link>
              </div>

      ),
      key: '0',
    },
    
  ];
  return (
    <div className="iconsBarContainer">
      <div id="iconsBarDiv">
        <div className="iconsBar">
          <div id="home" className="iconsDiv"><Link to="/users">
                <HomeOutlined/>
              </Link>
          </div>
          <div id="discover" className="iconsDiv">      <Link to="/">
            <SearchOutlined/>
            </Link>
          </div>

          {user ? (
            <>

<div><Link to="/createPost">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    height="24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="svg w-6 h-6 text-gray-800 dark:text-white"
                  >
                    <path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44771 13 8V11H16C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13H13V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V13H8C7.44772 13 7 12.5523 7 12C7 11.4477 7.44771 11 8 11H11V8Z" fill="#0F0F0F"></path> <path fillRule="evenodd" clipRule="evenodd" d="M23 4C23 2.34315 21.6569 1 20 1H4C2.34315 1 1 2.34315 1 4V20C1 21.6569 2.34315 23 4 23H20C21.6569 23 23 21.6569 23 20V4ZM21 4C21 3.44772 20.5523 3 20 3H4C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V4Z" fill="#0F0F0F"></path>
                  </svg>
              </Link>
            </div>
            
            <div>
              <Link to="/following">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    height="24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="svg w-6 h-6 text-gray-800 dark:text-white"
                  >
                    <path
                      d="M4 6H20M4 12H20M4 18H20"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
              </Link>
            </div>
              
              <Dropdown menu={{      items}}>
                <span onClick={(e) => e.preventDefault()}>
                  <Space>
                    <div id="profileMenu" className="iconsDiv">
                      <Link to="/profile">
                      <img className="profileImg" src={"http://localhost:8080/public/users/"+ user.profilePic} alt="profilePic" />
                    </Link>
                  </div>
                  </Space>
              </span>
            </Dropdown>
              
            </>
          ) : (
            <>
              <div id="profileDiv" className="iconsDiv">
                <Link to="/register">
                <FormOutlined/>
                </Link>
              </div>
              <div div id="loginDiv" className="iconsDiv">
                <Link to="/login">
                <UserOutlined/>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SideBar;

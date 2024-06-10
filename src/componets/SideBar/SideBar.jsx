import React, { useEffect } from "react";
import {  Dropdown, Space } from 'antd';
import { DownOutlined, FormOutlined, HomeOutlined, PlusOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons';
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
              <PlusOutlined/>
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

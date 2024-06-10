import React, { useEffect } from "react";
import {  Dropdown, Space } from 'antd';
import { CoffeeOutlined, DownOutlined, FontSizeOutlined, FormOutlined, HomeOutlined, PlusOutlined, SearchOutlined, ThunderboltOutlined, UserOutlined } from '@ant-design/icons';
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
                <ThunderboltOutlined />
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
          <HomeOutlined style={{ fontSize: '20px',color:"grey"}} />
          </Link>
          </div>
          <div id="discover" className="iconsDiv">      <Link to="/">
            <SearchOutlined style={{ fontSize: '20px', color:"grey"}}/>
            </Link>
          </div>

          {user ? (
            <>
<div><Link to="/createPost">
              <PlusOutlined style={{ fontSize: '20px',color:"grey"}} />
              </Link>
            </div>
            
            <div>
              <Link to="/following">
              <CoffeeOutlined style={{ fontSize: '22px', color:"grey"}}/>
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

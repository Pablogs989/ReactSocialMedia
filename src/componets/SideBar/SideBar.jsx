import React, { useEffect, useState } from "react";
import { Dropdown, Modal, Space, notification } from 'antd';
import { CoffeeOutlined, DownOutlined, FontSizeOutlined, FormOutlined, HomeOutlined, PlusOutlined, SearchOutlined, ThunderboltOutlined, UserOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout, reset } from "../../features/auth/authSlice";
import "./SideBar.scss";
import CreatePost from "../CreatePost/CreatePost";

const SideBar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    const [isModalOpenCreatePosts, setIsModalOpenCreatePosts] = useState(false);
    const { message, isSuccessLogout, isErrorLogout } = useSelector((state) => state.auth);

    useEffect(() => {
        if (isSuccessLogout) {
            notification.success({
                message: "Success",
                description: message
            });
            navigate("/profile");
        }
        if (isErrorLogout) {
            notification.error({
                message: "Error",
                description: message
            });
        }
        dispatch(reset());
    }, [isSuccessLogout, message, isErrorLogout]);

    const showModalCreatePosts = () => {
        setIsModalOpenCreatePosts(true);
    };

    const handleCancelCreatePosts = () => {
        setIsModalOpenCreatePosts(false);
    };

    const handleLogout = async () => {
        try {
            await dispatch(logout()).unwrap();
            navigate('/login');
        } catch (error) {
            console.error('Failed to logout:', error);
        }
    };

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user));
    }, [user]);

    const items = [
        {
            label: (
                <div
                    id="logout"
                    onClick={() => { handleLogout() }}
                    className="iconsDiv"
                >
                    <ThunderboltOutlined />
                    <div className="sideBarTextSection">Logout</div>
                </div>
            ),
            key: '0',
        },
    ];

    return (
        <div className="iconsBarContainer">
            <div id="iconsBarDiv">
                <div className="iconsBar">
                        <Link to="/">
                    <div id="home" className="iconsDiv">
                            <HomeOutlined  />
                            <div className="sideBarTextSection">
                                Home
                            </div>
                    </div>
                        </Link>

                    {user && (
                        <>
                            <div className="iconsDiv" onClick={showModalCreatePosts}>
                                <PlusOutlined />
                                <div className="sideBarTextSection">Post!</div>
                            </div>
                            <Modal open={isModalOpenCreatePosts} footer={null} onCancel={handleCancelCreatePosts}>
                                <CreatePost />
                            </Modal>
                                <Link to="/following">
                            <div className="iconsDiv">
                                    <CoffeeOutlined  />
                                    <div className="sideBarTextSection">
                                        Followed
                                    </div>
                            </div>
                                </Link>

                            <Dropdown menu={{ items }}>
                                <span onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        <div id="profileMenu" className="iconsDiv">
                                            <Link to="/profile">
                                                <img className="profileImg" src={"http://localhost:8080/public/users/" + user.profilePic} alt="profilePic" />
                                                <div className="sideBarTextSection">
                                                    {user.name}
                                                </div>
                                            </Link>
                                        </div>
                                    </Space>
                                </span>
                            </Dropdown>
                        </>
                    )}

                    {!user && (
                            <Link to="/login">
                        <div id="loginDiv" className="iconsDiv">
                        <UserOutlined />
                            <div className="sideBarTextSection">Log in!</div>
                            
                        </div>
                            </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SideBar;

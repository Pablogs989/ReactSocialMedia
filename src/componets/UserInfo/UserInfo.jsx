import React, { useRef, useState } from 'react';
import { Spin,Modal, Button   } from 'antd';
import './UserInfo.scss';
import { useDispatch, useSelector } from 'react-redux';
import { updatePic}  from "../../features/auth/authSlice"
import UserCard from '../UserCard/UserCard';
import GetUsers from '../GetUsers/GetUsers';

const UserInfo = ({ user }) => {
    const { user:logged } = useSelector((state) => state.auth);

    const [isModalOpen, setIsModalOpen] = useState(false);

const showModalFollowers = () => {
    setIsModalOpen(true);
};
const showModalFollowings = () => {
    setIsModalOpen(true);
    };

const handleOk = () => {
    setIsModalOpen(false);
};

const handleCancel = () => {
    setIsModalOpen(false);
};

    
    const dispatch = useDispatch();
    const inputFileRef = useRef(null);
    
    const handleImageClick = () => {
        if(logged._id === user._id){
            inputFileRef.current.click(); 
        }else{
            console.log("You can't change the profile picture of another user");
        }
        };
        
const handleFileChange = (event) => {
    const formdata = new FormData();
    formdata.set('profilePic', event.target.files[0]);
    try {
        dispatch(updatePic(formdata))

    } catch (error) {
        
    console.error(error);
    notification.error({ message: "we have some troubles uploading your picture" });
    }
    
    
};

if (!user) {
    return <Spin />;
}

console.log(user.profilePic);

return (
    <>
    <div className='userInfoContainer'>
        <div className='userNameDiv'>{user.name}</div>
        <div className='userInfoDivContainer'>
        <div className="userAvatarDiv">
            <img
            className="profileImg"
            src={`http://localhost:8080/public/users/${user.profilePic}`}
            alt="profilePic"
            onClick={handleImageClick} 
            />
            <input
            type="file"
            ref={inputFileRef}
            className="hidden-input" 
            onChange={handleFileChange} 
            />
        </div>
        <div className="userPostsDiv">
            {user.postsId.length}
            <p>Posts</p>
        </div>
        <div className="userFollowersDiv"  onClick={showModalFollowers}>
            {user.followers.length}
            <p>followers</p>
        </div>
        <div className="userFollowingDiv" onClick={showModalFollowings} >
            {user.following.length}
            <p>following</p>
        </div>
        </div>
    </div>
        <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        </Modal>

        
    </>
);
};

export default UserInfo;

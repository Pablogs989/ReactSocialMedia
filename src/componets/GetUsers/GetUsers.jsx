import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../../features/auth/authSlice'
import UserCard from '../UserCard/UserCard'
import "./GetUsers.scss"

const GetUsers = () => {
    const dispatch = useDispatch()
    const users = useSelector(state => state.auth.users)
    
    
    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])

    return (
        <div className='getUsersDivContainer'>
            <div className="userCard">
                <div>
                    <UserCard users={users}/> 
                </div>
                <a className="moreUserCard" href="#">See more</a>
            </div>
        </div>
    )
}

export default GetUsers
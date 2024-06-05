import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login, reset } from '../../features/auth/authSlice'
import { useNavigate } from 'react-router-dom'
import { notification } from 'antd'
import '../Register/Register.scss'

const Login = () => {
    const [formData, setFormData] = useState({
        email:'',
        password:''
    })
    const {email,password} = formData
    const {message,isSuccess,isError} = useSelector((state)=>state.auth)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(()=>{
        if(isSuccess){
            notification.success({
                message:"Success",
                description:message
            })
            navigate("/profile")
        }
        if(isError){
            notification.error({
                message:"Error",
                description:message
            })
        }
        dispatch(reset())
    },[isSuccess,message,isError])

    const onChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value,
        })
    }
    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(login(formData))
    }
  return (
    <div className="componentDivContainer">
        <div className="formContainer">
            <form onSubmit={onSubmit}>
                <div className="inputnDiv">
                    <input type="email" name="email" value={email} onChange={onChange} placeholder='Insert your email'/>
                </div>
                <div className="inputDiv">
                <input type="password" name="password" value={password} onChange={onChange} placeholder='Insert your password'/>
                </div>
                <div className="ButtonDiv">
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    </div>
  )
}
export default Login
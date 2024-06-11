import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login, reset } from '../../features/auth/authSlice'
import { Link, useNavigate } from 'react-router-dom'
import { Input, notification } from 'antd'
import '../Register/Register.scss'
import { LockOutlined, UserOutlined } from '@ant-design/icons'

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
<>

    
    <div className="componentDivContainer">
        <div className="formContainer">
            <form onSubmit={onSubmit}>
                <div className="inputDiv">

                    <Input name="email" value={email} onChange={onChange} placeholder='Insert your email' prefix={<UserOutlined/>}/>
                </div>
                    
                <div className="inputDiv">
                <Input.Password  name="password" value={password} onChange={onChange} placeholder='Insert your password' prefix={<LockOutlined/>}/>
                </div>
    
                
                <div className="inputDiv">
                <p><a href="" className="a2">forgot your password? </a></p>
                </div>
                <div className="ButtonDiv">
                    <button type="submit">Login</button>
                </div>
                <div className="inputDiv">

                <p>Don't have an account? <Link to="/register">Sign up!</Link></p>
                </div>

            </form>
        </div>
    </div>
</>
  )
}
export default Login
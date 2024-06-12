import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login, reset } from '../../features/auth/authSlice'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Input, notification, Button } from 'antd'
import '../Register/Register.scss'
import { LockOutlined, UserOutlined } from '@ant-design/icons'

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const { email, password } = formData
    const { message, isSuccess, isError } = useSelector((state) => state.auth)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        if (isSuccess) {
            notification.success({
                message: "Success",
                description: message
            })
            navigate("/profile")
        }
        if (isError) {
            notification.error({
                message: "Error",
                description: message
            })
        }
        dispatch(reset())
    }, [isSuccess, message, isError, dispatch, navigate])

    const onChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const onSubmit = () => {
        dispatch(login(formData))
    }

    return (
        <div className="componentDivContainer">
            <div className="formContainer">
                <Form onFinish={onSubmit}>
                    <div className="inputDiv">
                        <Form.Item
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'You must provide your email',
                                },
                                {
                                    type: 'email',
                                    message: 'The input is not a valid email',
                                },
                            ]}
                            initialValue={email}
                        >
                            <Input
                                name="email"
                                value={email}
                                onChange={onChange}
                                placeholder='Insert your email'
                                prefix={<UserOutlined />}
                            />
                        </Form.Item>
                    </div>

                    <div className="inputDiv">
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'You must provide your password',
                                },
                            ]}
                            initialValue={password}
                        >
                            <Input.Password
                                name="password"
                                value={password}
                                onChange={onChange}
                                placeholder='Insert your password'
                                prefix={<LockOutlined />}
                            />
                        </Form.Item>
                    </div>

                    <div className="inputDiv">
                        <p><a href="" className="a2">Forgot your password?</a></p>
                    </div>

                    <div className="ButtonDiv">
                        <Button type="primary" htmlType="submit">Login</Button>
                    </div>

                    <div className="inputDiv">
                        <p>Don't have an account? <Link to="/register">Sign up!</Link></p>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default Login

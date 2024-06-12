import React, { useEffect, useState } from "react";
import { register, reset } from "../../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, notification, Button } from "antd";
import "./Register.scss";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formData;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isSuccess, message, isError } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isSuccess) {
      notification.success({
        message: "Success",
        description: message,
      });
      navigate("/login");
    }
    if (isError) {
      notification.error({
        message: "Error!!!",
        description: message,
      });
    }
    dispatch(reset());
  }, [isSuccess, message, isError, navigate, dispatch]);

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    dispatch(register(formData));
  };

  return (
    <div className="componentDivContainer">
      <div className="formContainer">
        <Form onFinish={onSubmit}>
          <div className="inputDiv">
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: "You must provide your name",
                },
              ]}
              initialValue={name}
            >
              <Input
                type="text"
                name="name"
                value={name}
                onChange={onChange}
                placeholder="Insert your name"
              />
            </Form.Item>
          </div>

          <div className="inputDiv">
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "You must provide your email",
                },
                {
                  type: 'email',
                  message: "The input is not a valid email",
                },
              ]}
              initialValue={email}
            >
              <Input
                name="email"
                value={email}
                onChange={onChange}
                placeholder="Insert your email"
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
                  message: "You must provide your password",
                },
              ]}
              initialValue={password}
            >
              <Input.Password
                name="password"
                value={password}
                onChange={onChange}
                placeholder="Insert your password"
                prefix={<LockOutlined />}
              />
            </Form.Item>
          </div>

          <div className="ButtonDiv">
            <Button type="primary" htmlType="submit">Register</Button>
          </div>

          <div className="inputDiv">
            <p>Do you have an account? <Link to="/login">Login!</Link></p>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Register;

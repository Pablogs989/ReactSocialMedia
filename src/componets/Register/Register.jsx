import React, { useEffect, useState } from "react";
import { register, reset } from "../../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { Input, notification } from "antd";
import "./Register.scss";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";


const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    birthday: "",
  });
  const { name, email, password,birthday } = formData;

  const dispatch = useDispatch();
  const { isSuccess, message, isError } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isSuccess) {
      notification.success({
        message: "Success",
        description: message,
      });
    }
    if (isError) {
      notification.error({
        message: "Error!!!",
        description: message,
      });
    }
    dispatch(reset())
  }, [isSuccess, message, isError]);
  

  const onChange = (e) => {
    setFormData(
      {
      ...formData,
    
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();

 
      return dispatch(register(formData));
    
  };
  return (
    <div className="componentDivContainer">
      <div className="formContainer">
        <form onSubmit={onSubmit}>
          <div className="inputDiv">
            <Input
              type="text"
              name="name"
              value={name}
              onChange={onChange}
              placeholder="Insert your name"
            />
          </div>
          
          <div className="inputDiv">
              <Input name="email" value={email} onChange={onChange} placeholder='Insert your email' prefix={<UserOutlined/>}/>
              </div>
          <div className="inputDiv">
                <Input.Password  name="password" value={password} onChange={onChange} placeholder='Insert your password' prefix={<LockOutlined/>}/>
                </div>
          <div className="ButtonDiv">
            <button  type="submit">Register</button>
          </div>
          <div className="inputDiv">

        <p> you have an account? <Link to="/login">Login!</Link></p>
        </div>
        </form>
      </div>
    </div>
  );
};
export default Register;
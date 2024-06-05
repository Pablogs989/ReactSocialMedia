import React, { useEffect, useState } from "react";
import { register, reset } from "../../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { notification } from "antd";
import "./Register.scss";


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
    <div className="registerDivContainer">
      <div className="formRegisterContainer">
        <form onSubmit={onSubmit}>
          <div className="inputRegisterDiv">
            <input
              type="text"
              name="name"
              value={name}
              onChange={onChange}
              placeholder="Insert your name"
            />
          </div>
          <div className="inputRegisterDiv">
            <input
              type="email"
              name="email"  value={email}
              onChange={onChange}
              placeholder="Insert your email"
            />
          </div>
          <div className="inputRegisterDiv">
            <input type="password" name="password" value={password} onChange={onChange} placeholder="Insert your password"/>
            </div>
          <div className="inputRegisterDiv">
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Register;
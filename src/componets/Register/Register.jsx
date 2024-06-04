import React, { useState } from "react";
import { register } from "../../features/auth/authSlice";
import { useDispatch } from "react-redux";
import { notification } from "antd";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    birthday: "",
  });
  const { name, email, password,birthday } = formData;

  const dispatch = useDispatch();

  const onChange = (e) => {
    console.log(typeof(e.target.value),e.target.name )
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
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={onChange}
        placeholder="Insert your name"
      />
      <input
        type="email"
        name="email"
        value={email}
        onChange={onChange}
        placeholder="Insert your email"
      />
      <input type="date" name="birthday" value={birthday} onChange={onChange} id="birthday" />
      <input
        type="password"
        name="password"
        value={password}
        onChange={onChange}
        placeholder="Insert your password"
      />
      {/* <input
        type="password"
        name="password2"
        value={password2}
        onChange={onChange}
        placeholder="Insert your password"
      /> */}
      <button type="submit">Register</button>
    </form>
  );
};
export default Register;
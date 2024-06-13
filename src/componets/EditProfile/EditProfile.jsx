import React, { useEffect, useState } from "react";
import { Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { updateUser } from "../../features/auth/authSlice";
import { useDispatch } from "react-redux";
import "./EditProfile.scss"; // Importa el archivo SCSS aquí

const EditProfile = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setFormData({
        email: user.email,
        name: user.name,
      });
    }
  }, []);

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    const user = JSON.parse(localStorage.getItem("user"));
    e.preventDefault();
    console.log(formData);
    if (formData.email === user.email) {
      delete formData.email;
    }
    dispatch(updateUser(formData));
  };

  return (
    <div className="editProfileContainer">
      <form onSubmit={onSubmit}>
        <div className="inputDiv">
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={onChange}
            placeholder="Insert your name"
          />
        </div>
        <div className="inputDiv">
          <Input
            name="email"
            value={formData.email}
            placeholder="Insert your email"
            onChange={onChange}
            prefix={<UserOutlined />}
          />
        </div>
        <div className="ButtonDiv">
          <button type="submit">Edit</button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;

import React, { useState } from "react";
import { Form, Input, Button, Upload, notification } from "antd";
import { connect, useDispatch } from "react-redux";
import { createPost } from "../../features/posts/postsSlice";
import './CreatePost.scss';

const CreatePost = () => {
  const [imagePreview, setImagePreview] = useState(null); 
  const dispatch = useDispatch();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null); 
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.set("text", event.target.text.value);
    if (event.target.image.files[0]) {
      formData.set("image", event.target.image.files[0]);
    }

    try {
      await dispatch(createPost(formData)).unwrap();
      notification.success({ message: "Product successfully uploaded " });
      setImagePreview(null);
    } catch (error) {
      console.error(error);
      notification.error({ message: "Failed to create post" });
    }
  };

  return (
    <form className="formPost" onSubmit={handleSubmit}>
      <Input name="text" placeholder="Text" className="ant-input" />
      <input type="file" name="image" id="file" className="input-file" onChange={handleImageChange} />
      
      {imagePreview && (
        <div>
          <img src={imagePreview} alt="Image Preview" className="image-preview" />
        </div>
      )}

      <Button type="primary" htmlType="submit" className="ant-btn-primary">
        Create
      </Button>
    </form>
  );
};

export default connect()(CreatePost);

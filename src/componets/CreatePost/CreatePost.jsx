import React, { useState } from "react";
import { Form, Input, Button, Upload, notification } from "antd";
import { connect, useDispatch } from "react-redux";
import { createPost } from "../../features/posts/postsSlice";

const CreatePost = () => {

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.set("text", event.target.text.value);
    if (event.target.image.files[0])
      formData.set("image", event.target.image.files[0]);

    try {
      dispatch(createPost(formData)).unwrap();
      notification.success({ message: "Product successfully uploaded " });
    } catch (error) {
      console.error(error);
      notification.error({ message: "Failed to create post" });
    }
  };

  // const handleImageChange = (info) => {
  //   if (info.file.status !== "removed") {
  //     setImage(info.file.files[0]);
  //   } else {
  //     setImage(null);
  //   }
  // };

  // const handleRemove = () => {
  //   setImage(null);
  // };

  return (
    <form className="formPost" action="" onSubmit={handleSubmit}>
      <Input name="text" placeholder="Text" />

      {/* <Upload
        name="image"
        listType="picture"
        beforeUpload={() => false}
        onChange={handleImageChange}
        onRemove={handleRemove}
        maxCount={1}
      >
        <Button icon={<UploadOutlined />}>Select Image</Button>
      </Upload> */}

      <input type="file" name="image" id="file" className="input-file" />

      <Button type="primary" htmlType="submit">
        Create
      </Button>
    </form>
  );
};

export default connect()(CreatePost);

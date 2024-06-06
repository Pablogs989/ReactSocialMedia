// src/components/MyForm.jsx
import React from 'react';
import { Form, Input, Button, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useState } from 'react';
//import { post } from "../../features/posts/postsSlice";

const CreatePost = () => {
  const [form] = Form.useForm();
  const [image, setImage] = useState(null);

  const handleSubmit = (values) => {
    const formData = new FormData();
    formData.append('text', values.text);
    if (image) {
      formData.append('image', image);
    }
    post(formData);
    console.log('Form data:', formData);
  };

  const handleImageChange = (info) => {
    if (info.file.status === 'done') {
      setImage(info.file.originFileObj);
    } else {
      setImage(null);
    }
  };

  const handleRemove = () => {
    setImage(null);
  };

  return (
    <Form
      form={form}
      name="my_form"
      onFinish={handleSubmit}
      layout="vertical"
      style={{ maxWidth: 600, margin: 'auto' }}
    >
      <Form.Item
        name="text"
        label="Text"
        rules={[{ required: true, message: 'Write something' }]}
      >
        <Input.TextArea rows={4} />
      </Form.Item>

      <Form.Item name="image" label="Image">
      <Upload
          name="image"
          listType="picture"
          beforeUpload={() => false}
          onChange={handleImageChange}
          onRemove={handleRemove}
          maxCount={1}  
        >
          <Button icon={<UploadOutlined />}>Select Image</Button>
        </Upload>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Create
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreatePost;

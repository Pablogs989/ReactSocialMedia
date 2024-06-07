import React, { useState } from 'react';
import { Form, Input, Button, Upload, notification } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { createPost } from "../../features/posts/postsSlice";

const CreatePost = (props) => {
  const [form] = Form.useForm();
  const [image, setImage] = useState(null);

  const handleSubmit = async (values) => {
    const formData = new FormData();
    formData.append('text', values.text);
    if (image) {
      formData.append('image', image);
    }

    try {
      await createPost(formData);
      notification.success({ message: 'Post successfully created' });
      form.resetFields();
      setImage(null);
    } catch (error) {
      console.error(error);
      notification.error({ message: 'Failed to create post' });
    }
  };

  const handleImageChange = (info) => {
    if (info.file.status !== 'removed') {
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
      name="create_post"
      onFinish={handleSubmit}
      layout="vertical"
      style={{ maxWidth: 600, margin: 'auto' }}
    >
      <Form.Item
        name="text"
        label="Text"
        rules={[{ required: true, message: 'Please write something' }]}
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

export default connect()(CreatePost);

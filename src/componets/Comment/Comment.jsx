import React, { useState } from 'react';
import { HeartTwoTone, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Button, Card, Input, Spin } from 'antd';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createComment } from '../../features/comment/commentSlice';

const Comment = ({ post }) => {
  const { id } = useParams();
  if (!post.commentsId) return <Spin />;
  const dispatch = useDispatch();

  const [commentInput, setCommentInput] = useState("");

  const handleInputChange = (e) => {
    const { value } = e.target;
    setCommentInput(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Valor enviado:', commentInput);

    const commentData = {
      id: id,
      text: commentInput
    };
      console.log(commentData.text);
    dispatch(createComment(commentData));

    setCommentInput("");
  };

  return (
    <div>
      {post.commentsId.map((comment) => (
        <Card key={comment._id}>
          <div>
            {comment.text}
          </div>
          <div>
            <HeartTwoTone />
            <EditOutlined />
            <DeleteOutlined />
          </div>
        </Card>
      ))}
      <Card>
        <form onSubmit={handleSubmit}>
          <Input
            value={commentInput}
            onChange={handleInputChange}
            placeholder="Escribe algo..."
          />
          <Button type="primary" htmlType="submit">
            Enviar
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Comment;

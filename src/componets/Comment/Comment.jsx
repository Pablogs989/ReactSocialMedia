import { HeartTwoTone,  EditOutlined } from '@ant-design/icons';
import { Button, Card, Input, Spin } from 'antd';
import React, { useState } from 'react';

const Comment = ({ post }) => {
  if (!post.commentsId) return <Spin />;

  const [inputValues, setInputValues] = useState({});
  const [visibleInputs, setVisibleInputs] = useState({});

  const handleInputChange = (e, commentId) => {
    const value = e.target.value;
    setInputValues((prevValues) => ({
      ...prevValues,
      [commentId]: value
    }));
  };

  const handleSendClick = (commentId) => {
    setVisibleInputs((prevVisible) => ({
      ...prevVisible,
      [commentId]: !prevVisible[commentId]
    }));
  };
console.log(inputValues);
  const handleSubmit = (commentId) => {
    console.log('Valor enviado:', inputValues[commentId]);
    // Aquí puedes añadir la lógica para enviar el comentario relacionado con el post
    setInputValues((prevValues) => ({
      ...prevValues,
      [commentId]: ''
    }));
    setVisibleInputs((prevVisible) => ({
      ...prevVisible,
      [commentId]: false
    }));
  };

  const commentLists = post.commentsId.map((comment) => {
    const commentId = comment._id;
    const inputValue = inputValues[commentId] || '';
    const isVisible = visibleInputs[commentId];

    const suffix = (
      <Button
        type="primary"
        onClick={() => handleSubmit(commentId)}
        style={{
          visibility: inputValue ? 'visible' : 'hidden',
          pointerEvents: inputValue ? 'auto' : 'none'
        }}
        
      >
        Enviar
      </Button>
    );

    return (
      <Card key={commentId}>
        <div>
          {comment.text}
        </div>
        <div>
          <HeartTwoTone />
          <EditOutlined  onClick={() => handleSendClick(commentId)}  />
        </div>
        {isVisible && (
          <Input
            value={inputValue}
            onChange={(e) => handleInputChange(e, commentId)}
            placeholder="Escribe algo..."
            suffix={suffix}
          />
        )}
      </Card>
    );
  });

  return (
    <div>
      {commentLists}
    </div>
  );
};

export default Comment;

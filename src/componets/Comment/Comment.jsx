import React, { useState } from 'react';
import { HeartTwoTone, EditOutlined, DeleteOutlined, HeartFilled } from '@ant-design/icons';
import { Button, Card, Input, Spin } from 'antd';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createComment, dislikeComment, likeComment } from '../../features/comment/commentSlice';

const Comment = ({ post }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [commentInput, setCommentInput] = useState("");

  if (!post.commentsId) return <Spin />;

 

  const handleInputChange = (e) => {
    const { value } = e.target;
    setCommentInput(value);
  };

  const handleLike = (commentId) => {
    console.log(commentId);
    dispatch(likeComment(commentId));
  };
  const handleDislike = (commentId) => {
    console.log(commentId);
    dispatch(dislikeComment(commentId));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Valor enviado:', commentInput);

    const commentData = {
      id: id,
      text: commentInput
    };
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
            <HeartTwoTone onClick={()=>handleLike(comment._id)}/>
            <HeartFilled onClick={()=>handleDislike(comment._id)}/>
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

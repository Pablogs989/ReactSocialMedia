import React, { useState } from 'react';
import { HeartTwoTone, EditOutlined, DeleteOutlined, HeartFilled } from '@ant-design/icons';
import { Button, Card, Input, Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createComment, deleteComment, dislikeComment, likeComment } from '../../features/comment/commentSlice';
import { set } from 'mongoose';

const Comment = ({ post }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [commentInput, setCommentInput] = useState("");
  const { user:loggedUser } = useSelector((state) => state.auth);
  const [isDisabled, setIsDisabled] = useState(true);

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
  const handleDelete = (commentId) => {
    console.log(commentId);
    dispatch(deleteComment(commentId));
  };
  console.log(isDisabled);
  const handleUpdate = (commentId) => {
    setIsDisabled(false);
    console.log(isDisabled);
    console.log(commentId);
  }

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
      {post.commentsId.map((comment) => {
        const isLiked = comment.likes.includes(loggedUser._id);
        return (
          <Card key={comment._id}>
            <div>
              <Input placeholder={comment.text} disabled={isDisabled}/>
     
            </div>
            <div>
              
              {isLiked ? <div><HeartTwoTone onClick={() => handleLike(comment._id)} /> {comment.likes.length} </div>: <div><HeartFilled  onClick={() => handleDislike(comment._id)} />  {comment.likes.length} </div> } 
              {loggedUser._id === comment.userId && (
                <>
                
                  <EditOutlined onClick={() => handleUpdate(comment._id)} />

                  <DeleteOutlined  onClick={() => handleDelete(comment._id)}/>
                </>
              )}
            </div>
          </Card>
        );
      })}
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

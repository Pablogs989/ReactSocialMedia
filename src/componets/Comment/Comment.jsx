import React, { useState } from 'react';
import { HeartTwoTone, EditOutlined, DeleteOutlined, HeartFilled } from '@ant-design/icons';
import { Button, Card, Input, Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createComment, deleteComment, dislikeComment, likeComment, updateComment } from '../../features/posts/postsSlice';

const Comment = ({ post }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [commentInput, setCommentInput] = useState("");
  const [editableComments, setEditableComments] = useState({});
  const { user: loggedUser } = useSelector((state) => state.auth);
  const { isLoading } = useSelector((state) => state.posts);

  if (!post) return <Spin />;
  if (isLoading) return <Spin />;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditableComments((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLike = (commentId) => {
    dispatch(likeComment(commentId));
  };

  const handleDislike = (commentId) => {
    dispatch(dislikeComment(commentId));
  };

  const handleDelete = (commentId) => {
    dispatch(deleteComment(commentId));
  };

  const handleEditClick = (commentId, currentText) => {
    setEditableComments((prev) => ({
      ...prev,
      [commentId]: currentText,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const commentData = {
      id: post._id,
      text: commentInput,
    };
    dispatch(createComment(commentData));
    setCommentInput("");
  };

  const handleUpdateSubmit = (e, commentId) => {
    e.preventDefault();
    const commentData = {
      id: commentId,
      text: editableComments[commentId],
    };
    dispatch(updateComment(commentData));
    setEditableComments((prev) => ({
      ...prev,
      [commentId]: undefined,
    }));
  };

  return (
    <div>
      {post.commentsId.map((comment) => {
        const isLiked = loggedUser && comment.likes?.includes(loggedUser._id);
        const isDisabled = editableComments[comment._id] === undefined;

        return (
          <Card key={comment._id}>
            <div>
              <form onSubmit={(e) => handleUpdateSubmit(e, comment._id)}>
                <Input
                  name={comment._id}
                  value={editableComments[comment._id] || comment.text}
                  placeholder={comment.text}
                  disabled={isDisabled}
                  onChange={handleInputChange}
                />
                {!isDisabled && (
                  <Button type="primary" htmlType="submit">
                    Actualizar
                  </Button>
                )}
              </form>
            </div>
            <div>
              {loggedUser && (
                <>
                  {!isLiked ? (
                    <div>
                      <HeartTwoTone onClick={() => handleLike(comment._id)} /> {comment.likes?.length}
                    </div>
                  ) : (
                    <div>
                      <HeartFilled onClick={() => handleDislike(comment._id)} /> {comment.likes.length}
                    </div>
                  )}
                  {loggedUser._id === comment.userId && (
                    <>
                      <EditOutlined onClick={() => handleEditClick(comment._id, comment.text)} />
                      <DeleteOutlined onClick={() => handleDelete(comment._id)} />
                    </>
                  )}
                </>
              )}
            </div>
          </Card>
        );
      })}
      {loggedUser && (
        <Card>
          <form onSubmit={handleSubmit}>
            <Input
              value={commentInput}
              onChange={(e) => setCommentInput(e.target.value)}
              placeholder="Escribe algo..."
            />
            <Button type="primary" htmlType="submit">
              Enviar
            </Button>
          </form>
        </Card>
      )}
    </div>
  );
};

export default Comment;

import React, { useState } from 'react';
import { HeartTwoTone, EditOutlined, DeleteOutlined, HeartFilled } from '@ant-design/icons';
import { Button, Card, Input, Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createComment, deleteComment, dislikeComment, likeComment, updateComment } from '../../features/posts/postsSlice';
import './Comment.scss';

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
    console.log(commentData);
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
          <div key={comment._id} className='commentContainer'>
            <div className='commentCard'>
                <form onSubmit={(e) => handleUpdateSubmit(e, comment._id)}>
                  <div className='commentInputDiv'>

                  <input className='commentInput' 
                    name={comment._id}
                    value={editableComments[comment._id] || comment.text}
                    placeholder={comment.text}
                    disabled={isDisabled}
                    onChange={handleInputChange}
                    />
                    </div>
                </form>
            </div>
            <div className='buttonContainer'>
              {!isDisabled && (
                <Button type="primary" htmlType="submit" className='sendButtonComment' onClick={(e) => handleUpdateSubmit(e, comment._id)}>
                  Actualizar
                </Button>
              )}
              <div className='likesDivContainer'>
                {loggedUser && (
                  <>
                    {!isLiked ? (
                      <div className='likesIconDiv'>
                        <HeartTwoTone className="likesIconComment" onClick={() => handleLike(comment._id)} /> {comment.likes?.length}
                      </div>
                    ) : (
                      <div className='likesIconDiv'>
                        <HeartFilled className="likesIconComment" onClick={() => handleDislike(comment._id)} /> {comment.likes.length}
                      </div>
                    )}
                    {loggedUser._id === comment.userId && (
                      <div className='editCommentsIcons'>
                        <EditOutlined className='editCommentIcons' onClick={() => handleEditClick(comment._id, comment.text)} />
                        <DeleteOutlined className='editCommentIcons' onClick={() => handleDelete(comment._id)} />
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        );
      })}
      {loggedUser && (
        <div className='commentContainer'>
          <>
            <form onSubmit={handleSubmit}>
              <input
                value={commentInput}
                onChange={(e) => setCommentInput(e.target.value)}
                placeholder="Escribe algo..."
                className='commentInputNewComment'
              />
            </form>
          </>
          <Button type="primary" htmlType="submit" className='sendButtonComment' onClick={handleSubmit}>
            Enviar
          </Button>
        </div>
      )}
    </div>
  );
};

export default Comment;

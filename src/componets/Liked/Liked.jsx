import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Post from '../Post/Post';
import { Spin } from 'antd';
import { getAll } from '../../features/posts/postsSlice';

const Liked = () => {
    const { user } = useSelector((state) => state.auth);
       
    if (!user) {
        return <Spin />;
      }
    const { posts } = useSelector((state) => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAll());
      }, [dispatch]);
    //   const likedId = liked.map(followed => followed._id);
    
    //   const postsIds = posts.filter(post => likedId.includes(post.userId?._id))
   const likes = posts.map((post)=>{ post.likes})
console.log(likes);    //   console.log(likedId, "likedId");  
    //   console.log(postsIds, "postsIds");
      
      
      if (!user) {
        return <Spin />;
      }
  return (
    <div className="divNavContainer">
    <h1>liked</h1>
    
    {/* <Post posts={postsIds} /> */}
  </div>
  )
}

export default Liked
/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import './PostDetail.css'

const PostDetail = () => {
    const post = useLoaderData();
    const navigate = useNavigate();
    const handleNavigate = ()=>{
        navigate(-1);
    }
    return (
        <div className='postDetail'>
            <h3>Id: {post.id}</h3>
            <h2>Title: {post.title}</h2>
            <h3>Body: {post.body}</h3>
            <button onClick={handleNavigate}>Go Back</button>
        </div>
    );
};

export default PostDetail;
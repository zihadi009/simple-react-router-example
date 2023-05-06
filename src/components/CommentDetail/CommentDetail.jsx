/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import './CommentDetail.css'

const CommentDetail = () => {
    const comment = useLoaderData();
    const navigate = useNavigate();
    const handleNavigate = ()=>{
        navigate(-1);
    }
    return (
        <div className='comment'>
            <h2>Id: {comment.id}</h2>
            <h1>Name: {comment.name}</h1>
            <h3>Email: {comment.email}</h3>
            <h4>Body: {comment.body}</h4>
            <button onClick={handleNavigate}>Go Back</button>
        </div>
    );
};

export default CommentDetail;
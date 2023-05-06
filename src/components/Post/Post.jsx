/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Post.css'
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const {id,title,body} = post;
    const navigate = useNavigate();
    const handleNavigate = ()=>{
        navigate(`/post/${id}`);
    }
    return (
        <div className='post'>
            <h3>Id: {id}</h3>
            <h2>Title: {title}</h2>
            <button onClick={handleNavigate}>Show More</button>
        </div>
    );
};

export default Post;
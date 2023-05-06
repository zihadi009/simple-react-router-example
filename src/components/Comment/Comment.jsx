/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Comment.css'

const Comment = ({comment}) => {
    const{id,name,email,body} = comment;
    const navigate = useNavigate();
    const handleNavigate = () =>{
        navigate(`/comment/${id}`)
    }
    return (
        <div className='comment'>
            <h2>Id: {id}</h2>
            <h1>Name: {name}</h1>
            <h3>Email: {email}</h3>
            <button onClick={handleNavigate}>Show More</button>
        </div>
    );
};

export default Comment;
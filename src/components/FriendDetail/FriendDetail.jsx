/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import './FriendDetail.css'

const FriendDetail = () => {
    const friend = useLoaderData();
    const navigate = useNavigate();
    const handleNavigate = ()=>{
        navigate(-1);
    }
    return (
        <div className='friendDetail'>
            <h3>Id: {friend.id}</h3>
            <h1>Name: {friend.name}</h1>
            <h2>Email: {friend.email}</h2>
            <button onClick={handleNavigate}>Go Back</button>
        </div>
    );
};

export default FriendDetail;
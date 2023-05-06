/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Friend.css'
import { Link, useNavigate } from 'react-router-dom';

const Friend = ({friend}) => {
    const {name, id, email,phone} = friend;
    const navigate = useNavigate();
    const handleNavigate = ()=>{
        navigate(`/friend/${id}`);
    }
    return (
        <div className='friend'>
            <h1>{name}</h1>
            <h3>{phone}</h3>
            <h3>{email}</h3>
            <button onClick={handleNavigate}>Show Details</button>
        </div>
    );
};

export default Friend;
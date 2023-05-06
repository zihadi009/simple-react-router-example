/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Album.css'
import { useNavigate } from 'react-router-dom';

const Album = ({album}) => {
    const {id, title} = album;
    const navigate = useNavigate();
    const handleNavigate = () =>{
        navigate(`/album/${id}`)
    }
    return (
        <div className='album'>
            <h2>Id: {id}</h2>
            <button onClick={handleNavigate}>Show More</button>
        </div>
    );
};

export default Album;
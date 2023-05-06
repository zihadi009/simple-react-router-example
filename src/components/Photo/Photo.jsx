/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Photo.css'
import { useNavigate } from 'react-router-dom';

const Photo = ({photo}) => {
    const {id, title} = photo;
    const navigate = useNavigate();
    const handleNavigate = () =>{
        navigate(`/photo/${id}`)
    }
    return (
        <div className='photo'>
            <h2>Id: {id}</h2>
            <button onClick={handleNavigate}>Show More</button>
        </div>
    );
};

export default Photo;
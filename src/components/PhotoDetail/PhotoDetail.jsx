/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import './PhotoDetail.css'

const PhotoDetail = () => {
    const photo = useLoaderData();
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(-1)
    }
    const { id, title, url } = photo;
    return (
        <div className='photoDetail'>
            <h2>Id: {id}</h2>
            <h1>Title: {title}</h1>
            <img src={url}></img>
            <div>
                <button onClick={handleNavigate}>Go Back</button>
            </div>
        </div>
    );
};

export default PhotoDetail;
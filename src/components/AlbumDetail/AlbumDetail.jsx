/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import './AlbumDetail.css'

const AlbumDetail = () => {
    const album = useLoaderData();
    const {id, title} = album;
    const navigate = useNavigate();
    const handleNavigate = ()=>{
        navigate(-1);
    }
    return (
        <div className='albumDetail'>
            <h2>Id: {id}</h2>
            <h3>Title: {title}</h3>
            <button onClick={handleNavigate}>Go Back</button>
        </div>
    );
};

export default AlbumDetail;
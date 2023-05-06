/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Photo from '../Photo/Photo';

const Photos = () => {
    const photos = useLoaderData();
    return (
        <div>
            {
                photos.map(photo => <Photo
                    key={photo.id}
                    photo={photo}
                ></Photo>)
            }
        </div>
    );
};

export default Photos;
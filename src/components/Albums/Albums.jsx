/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Album from '../Album/Album';

const Albums = () => {
    const albums = useLoaderData();
    const { id } = albums;
    return (
        <div>
            {
                albums.map(album => <Album
                    key={id}
                    album={album}
                ></Album>)
            }
        </div>
    );
};

export default Albums;
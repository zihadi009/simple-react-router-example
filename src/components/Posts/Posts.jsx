/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';

const Posts = () => {
    const posts = useLoaderData();
    const {id, title, body} = posts;
    return (
        <div className=''>
            {
                posts.map(post => <Post 
                    key={id}
                    post={post}
                ></Post>)
            }
        </div>
    );
};

export default Posts;
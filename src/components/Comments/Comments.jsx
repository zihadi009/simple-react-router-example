/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Comment from '../Comment/Comment';

const Comments = () => {
    const comments = useLoaderData();
    return (
        <div>
            {
                comments.map(comment => <Comment
                    key={comment.id}
                    comment={comment}
                ></Comment>)
            }
        </div>
    );
};

export default Comments;
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <nav>
            <ActiveLink to="/">Home</ActiveLink>
            <ActiveLink to="/friends">Friends</ActiveLink>
            <ActiveLink to="/posts">Posts</ActiveLink>
            <ActiveLink to="/comments">Comments</ActiveLink>
            <ActiveLink to="/albums">Albums</ActiveLink>
            <ActiveLink to="/photos">Photos</ActiveLink>
        </nav>
    );
};

export default Header;
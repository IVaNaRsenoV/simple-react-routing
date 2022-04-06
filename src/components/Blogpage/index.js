import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Blogpage.module.scss';

export const Blogpage = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts([...posts, ...data]))
    }, [])

    return (
        <ul>
            {
                posts.map((post, i) => (
                    <li key={i}>
                        <NavLink key={post.id} to={`/posts/:${post.id}`}>{post.title}</NavLink>
                    </li>
                ))
            }
        </ul>
    );
}
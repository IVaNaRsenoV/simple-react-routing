import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Post.module.scss';

export const Post = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id.slice(1)}`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [id])

    return (
        <>
            {
                post &&
                <>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                    <p>Id = {post.id}</p>
                </>
            }
        </>
    );
}
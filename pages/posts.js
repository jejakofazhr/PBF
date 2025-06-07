import React from 'react';
import { GetStaticProps } from 'next';

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();

    return {
    props: { posts },
    revalidate: 60, // regenerasi ulang setiap 60 detik
  };
}

export default function Posts({ posts }) {
    return (
        <>
        <h1>Daftar Post</h1>
        <ul>
            {posts.slice(0, 5).map(post => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
        </>
    );
}
'use client';

import React, { useEffect, useState } from 'react';
import { fetchPosts } from '../lib/api';
import withAuth from '../lib/withAuth';
import ThemeToggle from '../components/ThemeToggle';

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    getPosts();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-end mb-4">
        <ThemeToggle />
      </div>
      <h1 className="text-5xl font-bold text-center text-gray-900 mb-10">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {posts.map((post) => (
          <div key={post.id} className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-3">{post.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">{post.body.substring(0, 100)}...</p>
            <a href={`/posts/${post.id}`} className="text-indigo-500 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-600 font-medium">
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default withAuth(HomePage);

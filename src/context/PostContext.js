// src/context/PostContext.js
import React, { createContext, useState } from "react";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const refreshPosts = async () => {
    const fetchedPosts = await fetchPosts();
    setPosts(fetchedPosts);
  };

  return (
    <PostContext.Provider value={{ posts, setPosts, refreshPosts }}>
      {children}
    </PostContext.Provider>
  );
};

// src/context/PostContext.js
// import React, { createContext, useState, useContext } from "react";

// const RefreshContext = createContext();

// export const RefreshProvider = ({ children }) => {
//     const [refresh, setRefresh] = useState(false);

//     const triggerRefresh = () => setRefresh(!refresh);

//     return (
//         <RefreshContext.Provider value={{ refresh, triggerRefresh }}>
//             {children}
//         </RefreshContext.Provider>
//     );
// };

// export const useRefresh = () => useContext(RefreshContext);


// import React, { createContext, useState } from "react";

// export const PostContext = createContext();

// export const PostProvider = ({ children }) => {
//   const [posts, setPosts] = useState([]);

//   const refreshPosts = async () => {
//     const fetchedPosts = await fetchPosts();
//     setPosts(fetchedPosts);
//   };

//   return (
//     <PostContext.Provider value={{ posts, setPosts, refreshPosts }}>
//       {children}
//     </PostContext.Provider>
//   );
// };

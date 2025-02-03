import React from "react";
import Post from "./Post";
import { useSelector } from "react-redux";

const Posts = () => {
  const { posts = [] } = useSelector((store) => store.post);

  if (!posts || posts.length === 0) {
    return <p className="text-gray-500 text-sm">Loading posts...</p>;
  }

  return (
    <div>
      {posts.map((post) => (post ? <Post key={post._id} post={post} /> : null))}
    </div>
  );
};

export default Posts;

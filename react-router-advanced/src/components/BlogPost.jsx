import React from 'react';
import { useParams } from 'react-router-dom';

function BlogPost() {
  const { postId } = useParams();

  return (
    <div>
      <h2>Blog Post {postId}</h2>
      <p>Content for blog post {postId}.</p>
    </div>
  );
}

export default BlogPost;

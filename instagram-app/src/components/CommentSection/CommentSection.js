import React from 'react';
import '../PostContainer/PostContainer.css';

const CommentSection = () => {
  return (
    <form className="comment-form">
      <input name="comment" type="text" placeholder="Add a comment..."></input>
    </form>
  );
}

export default CommentSection;
import React from 'react';
import '../PostContainer/PostContainer.css';

const CommentSection = (props) => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     comments: props.comments,
  //     comment: '',
  //   }
  // }

  return (
    <form onSubmit={props.addNewComment} className="comment-form">
      <input
        type="text"
        placeholder="Add a comment..."
        value={props.comment}
        onChange={props.handleChanges}
      />
    </form>
  );
}

export default CommentSection;
import React from 'react';
import '../PostContainer/PostContainer.css';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      comment: ''
    }
  }

  render() {
    return (
      <form onSubmit="" className="comment-form">
        <input
          type="text"
          placeholder="Add a comment..."
          value=""
        />
      </form>
    );
  }
}

export default CommentSection;
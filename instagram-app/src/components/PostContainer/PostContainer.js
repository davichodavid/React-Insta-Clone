import React from 'react';
import './PostContainer.css';

import CommentSection from '../CommentSection/CommentSection';

class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.dummyData.comments,
      comment: '',
      likes: props.dummyData.likes,
    }
  }
  //**********************These handle comment creation ******************************/

  addNewComment = event => {
    console.log(this.state.comments)
    event.preventDefault();
    this.setState({
      comments: [...this.state.comments,
      {
        username: localStorage.getItem('username'),
        text: this.state.comment
      }
      ],
      comment: ''
    })
  }

  handleChanges = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  //**********************These handle adding Likes ******************************/


  addLike = event => {
    console.log("this fired")
    let likes = this.state.likes + 1;
    this.setState({
      likes: likes
    })
  }

  render() {
    return (
      <div className="post">
        <div className="post-header">
          <img src={this.props.dummyData.thumbnailUrl} alt="thumbnail" />
          <h1>{this.props.dummyData.username}</h1>
        </div>
        <img className="post-img" src={this.props.dummyData.imageUrl} alt="post" />
        <div className="like-comment">
          <button onClick={this.addLike}><i className="far fa-heart"></i></button>
          <button><i className="far fa-comment"></i></button>
        </div>
        <h1 className="likes">Likes: {this.state.likes}</h1>
        <div className="this-wont-work">
          {this.state.comments.map((comment, index) => {
            return <h1 key={index}>{comment.username}<p>{comment.text}</p></h1>;
          })}
        </div>
        <p className="time-stamp">{this.props.dummyData.timestamp}</p>

        <CommentSection addNewComment={this.addNewComment} handleChanges={this.handleChanges} comment={this.state.comment} />
      </div>
    )
  }
}
export default PostContainer;
import React from 'react';
import './PostContainer.css';

import CommentSection from '../CommentSection/CommentSection'

const PostContainer = (props) => {

  return (
    <div className="post">
      <div className="post-header">
        <img src={props.dummyData.thumbnailUrl} alt="thumbnail" />
        <h1>{props.dummyData.username}</h1>
      </div>
      <img className="post-img" src={props.dummyData.imageUrl} alt="post" />
      <div className="like-comment">
        <button><i className="far fa-heart"></i></button>
        <button><i className="far fa-comment"></i></button>
      </div>
      <h1 className="likes">Likes: {props.dummyData.likes}</h1>
      <div className="this-wont-work">
        {props.dummyData.comments.map(comment => {
          return <h1>{comment.username}<p>{comment.text}</p></h1>;
        })}
      </div>
      <p className="time-stamp">{props.dummyData.timestamp}</p>
      <CommentSection />
    </div>
  )
}

export default PostContainer;
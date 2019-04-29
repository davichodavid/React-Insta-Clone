import React from 'react';
import './PostContainer.css';

const PostContainer = (props) => {

  return (
    <div>
      <div className="post-header">
        <img src={props.dummyData.thumbnailUrl} alt="thumbnail" />
        <h1>{props.dummyData.username}</h1>
      </div>
      <img src={props.dummyData.imageUrl} alt="post" />

      <img />
    </div>
  )
}

export default PostContainer;
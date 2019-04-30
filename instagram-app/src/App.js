import React from 'react';
import './App.css';
import PropTypes from 'prop-types';


import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dummyData: dummyData
    };
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <div>
          {this.state.dummyData.map((post, index) => {
            return <PostContainer dummyData={post} key={index} />
          })}
        </div>

      </div>
    );
  }
}

PostContainer.propTypes = {
  dummyData: PropTypes.shape({
    thumbnailUrl: PropTypes.string,
    username: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    comments: PropTypes.arrayOf(PropTypes.object),
    timestamp: PropTypes.string
  })
}

export default App;

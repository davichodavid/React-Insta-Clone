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
      dummyData: [],
      filteredPosts: []
    };
  }

  componentDidMount() {
    this.setState({ dummyData: dummyData })
  }

  //**********************This handle searching and filtering posts ******************************/

  filterPosts = (event) => {
    // event.preventDefault();
    console.log('this fired');
    //eslint-disable-next-line
    const dummyDataPosts = this.state.dummyData.filter(dummyDataPost => {
      if (dummyDataPost.username.includes(event.target.value)) {
        return dummyDataPost;
      }

    });
    this.setState({
      filteredPosts: dummyDataPosts
    });

  };

  // handleFilterChanges = event => {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   });
  // };

  render() {
    return (
      <div className="App">
        <SearchBar filterPosts={this.filterPosts} filteredPosts={this.state.filteredPosts} handleFilterChanges={this.handleFilterChanges} />
        <div>
          {this.state.filteredPosts.length <= 0 ? this.state.dummyData.map((post, index) => {
            return <PostContainer dummyData={post} key={index} />
          }) : this.state.filteredPosts.map((post, index) => {
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

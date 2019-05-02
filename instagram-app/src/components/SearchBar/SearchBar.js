import React from 'react';
import './SearchBar.css'

const SearchBar = (props) => {
  return (
    <div className="nav-bar">
      <div className="logos">
        <i className="fab fa-instagram"></i>
        <img alt="text logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcBUKxm-jPyGj0Hr0Z1J7kHkjc3WMAwUZ68qPY81ij1rY9v6Gl" />
      </div>

      <form>
        <input
          type="text"
          name="filteredPosts"
          placeholder="Search"
          onChange={props.filterPosts}
        >
        </input>
      </form>

      <div className="icons">
        <i className="far fa-compass"></i>
        <i className="far fa-heart"></i>
        <i className="fas fa-user"></i>
      </div>

    </div>
  );
}

export default SearchBar;
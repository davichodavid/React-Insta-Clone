import React from 'react';
import './App.css';
import dummyData from './dummy-data';

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
        <h1>Work</h1>
      </div>
    );
  }
}


export default App;

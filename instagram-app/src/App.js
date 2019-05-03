import React from 'react';

import WithAuthenticate from './components/Authenticate/WithAuthenticate';
import PostPage from './components/PostContainer/PostPage';
import Login from './components/Authenticate/Login';

class App extends React.Component {
  constructor() {
    super();
    this.setState = {

    }
  }

  render() {
    return (
      <div>
        <HOC />
      </div>
    )
  }
}

const HOC = WithAuthenticate(PostPage)(Login);

export default App;

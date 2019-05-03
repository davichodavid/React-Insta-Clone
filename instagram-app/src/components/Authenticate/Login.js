import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      username: ''
    };
  }

  handleChanges = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  login = event => {
    localStorage.setItem('username', this.state.username);
    window.location.reload();
  }

  render() {
    return (
      <div>
        <h1>Welcome to Instagram, please Sign In</h1>
        <form>
          <input type='text'
            placeholder='Enter Password'
            name="password"
            onChange={this.handleChanges}
            value={this.state.password}
          />

          <input
            type='text'
            placeholder="Enter Username"
            name="username"
            onChange={this.handleChanges}
            value={this.state.username}
          />

          <button onClick={this.login}>Click me</button>
        </form>
      </div>
    )
  }


}

export default Login;
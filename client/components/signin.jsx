import React, { Component } from 'react';

export class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  render() {
    return (
      <div className="sign-in-up-title">
        username
        <input className="sign-in-up-input" type="text" onChange={
            event => this.setState({ username: event.target.value })
        } />
        password
        <input className="sign-in-up-input" type="text" onChange={
            event => this.setState({ password: event.target.value })
        } />
      <button className="sign-in-up-button" onClick={() => console.log(this.state.username, this.state.password)}>Sign-In Only</button>
      </div>
    );
  }
}

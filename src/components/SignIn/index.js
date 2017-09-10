import React, { Component } from 'react';

import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';

const SignInPage = () =>
  <div>
    <h1>SignIn</h1>
    <SignInForm />
    <PasswordForgetLink />
    <SignUpLink />
  </div>

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  onSubmit = (event) => {
    // do firebase sign in

    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={this.state.email}
          onChange={event => this.setState(() => ({ email: event.target.value }))}
          type="text"
          placeholder="Email Address"
        />
        <input
          value={this.state.password}
          onChange={event => this.setState(() => ({ password: event.target.value }))}
          type="password"
          placeholder="Password"
        />
        <button type="submit">
          Sign In
        </button>
      </form>
    );
  }
}

export default SignInPage;

export {
  SignInForm,
};

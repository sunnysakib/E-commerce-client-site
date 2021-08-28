import React, { Component } from "react";
import FormInput from "../FormInput/FormInput";
import './SignIn.scss'

class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onsubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label = "Email"
            required
          />

          <FormInput
            type="password"
            name="password"
            value={this.state.pasword}
            handleChange={this.handleChange}
            label = "Password"
            required
          />

          <input type="button" value="Submit Form" />
        </form>
      </div>
    );
  }
}

export default SignIn;

import React, { Component } from "react";
import { auth, googleSignIn } from "../../firebase/firebase.utils";

import CustomButton from "../CustomButton/CustomButton";
import FormInput from "../FormInput/FormInput";
import "./SignIn.scss";

class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit =async (e) => {
    e.preventDefault();
    const {email, password} = this.state;
    try{
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    }catch(e){
      console.log("error:"+ e);
    }
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
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
            required
          />

          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
            required
          />

          <div className="buttons">
            <CustomButton type="submit">SIGN IN</CustomButton>
            <CustomButton onClick={googleSignIn} isGoogleSignIn>
              SIGN IN WITH GOOGLE
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;

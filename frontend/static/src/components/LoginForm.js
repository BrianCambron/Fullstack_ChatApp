import React, { Component } from 'react';
import './LoginForm.css'

class LoginForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      email: '',
      password1:'',
      password2:'',
    }
  }

  render(){
    return(
      <form className="col-12 col-md-6">
        <h5 className="Register">Register</h5>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type='text' className="form-control" id="username" name="username"/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type='text' className="form-control" id="email" name="email"/>
          <small className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="password1">Password</label>
          <input type='text' className="form-control" id="password1" name="password1"/>
        </div>
        <div className="form-group">
          <label htmlFor="password2">Confirm Password</label>
          <input type='text' className="form-control" id="password2" name="password2"/>
        </div>
      </form>
    )
  }
}
export default LoginForm;

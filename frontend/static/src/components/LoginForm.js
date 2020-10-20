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
      hasAccount: false,
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleClick(){
    if(this.state.hasAccount === true){
        this.setState({hasAccount: false})
    }
    else{
      this.setState({hasAccount: true})
    }
  }
  handleChange(event){
    this.setState({[event.target.name]: event.target.value});
  }
  render(){
    const hasAccount = this.state.hasAccount;
    return(
      <React.Fragment>
      {hasAccount === false?
      <form className="col-12 col-md-6" onSubmit={(event) => this.props.registerUser(event, this.state)}>
        <h5 className="Register">Create Account</h5>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type='text' className="form-control" id="username" name="username" value={this.state.username} onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type='text' className="form-control" id="email" name="email" value={this.state.email} onChange={this.handleChange}/>
          <small className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="password1">Password</label>
          <input type='text' className="form-control" id="password1" name="password1" value={this.state.password1} onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="password2">Confirm Password</label>
          <input type='text' className="form-control" id="password2" name="password2" value={this.state.password2} onChange={this.handleChange}/>
        </div>
        <div className="create-Account-Btn">
          <button className="btn btn-primary">Register</button>
          <button onClick={this.handleClick}className="btn btn-link">Already have an account?</button>
        </div>
      </form>
      : <form className="col-12 col-md-6" onSubmit={(event) => this.props.logIn(event, this.state)}>
        <h5 className="Register">Log in</h5>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type='text' className="form-control" id="username" name="username" value={this.state.username} onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="password1">Password</label>
          <input type='text' className="form-control" id="password1" name="password1" value={this.state.password1} onChange={this.handleChange}/>
        </div>
        <div className="create-Account-Btn">
          <button className="btn btn-primary">Log in</button>
          <button onClick={this.handleClick}className="btn btn-link">Don't have an account?</button>
        </div>
      </form>
      }
      </React.Fragment>
    )
  }
}
export default LoginForm;

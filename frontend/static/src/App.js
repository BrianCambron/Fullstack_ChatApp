import React, { Component } from 'react';
import LoginForm from './components/LoginForm'
import Cookies from 'js-cookie';
import './App.css'

import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      token: '',
    }
    this.registerUser = this.registerUser.bind(this)
    this.logIn = this.logIn.bind(this)
  }
  // componentDidMount(){
  //   fetch('/api/v1/chats/')
  //   .then(response => response.json())
  //   .then(data => this.setState({chats: data}))
  //   .catch(error => console.log('Error:', error));
  // }
  logIn(event, data){
    event.preventDefault();
    const csrftoken = Cookies.get('csrftoken');
    fetch('/api/v1/rest-auth/login/', {
      method:'POST',
      headers:{
        'X-CSRFToken': csrftoken,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log('Error:', error));
  }

  registerUser(event, data){
    event.preventDefault();
    const csrftoken = Cookies.get('csrftoken');
    fetch('/api/v1/rest-auth/registration/', {
      method:'POST',
      headers: {
        'X-CSRFToken': csrftoken,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => this.setState({token: data}))
    .catch(error => console.log('Error:', error));
  }

  render(){
    return(
      <div className="form mt-5">
        <LoginForm registerUser={this.registerUser} logIn={this.logIn}/>
      </div>
    )
  }
}

export default App;

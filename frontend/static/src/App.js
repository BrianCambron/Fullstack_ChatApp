import React, { Component } from 'react';
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import ChatForm from './components/ChatForm'
import Cookies from 'js-cookie';
import './App.css'

import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      chats: [],
      display: 'register',
      isLoggedIn: Cookies.get('Authorization')? true: false,
    }
    this.registerUser = this.registerUser.bind(this)
    this.logIn = this.logIn.bind(this)
    this.postChat = this.postChat.bind(this)
    this.logOut = this.logOut.bind(this)
    this.fetchMessages = this.fetchMessages.bind(this)
  }
  componentDidMount(){
    this.fetchMessages();
    setInterval(this.fetchMessages, 1000);
  }
  fetchMessages(){
    const isLoggedIn = this.state.isLoggedIn;
    if(isLoggedIn === true){
      fetch('/api/v1/chats/')
      .then(response => response.json())
      .then(data => this.setState({chats: data}))
      .catch(error => console.log('Error:', error));
    }
  }

  postChat(event, data){
    event.preventDefault();
    const csrftoken = Cookies.get('csrftoken');
    fetch('/api/v1/chats/', {
      method:'POST',
      headers: {
        'X-CSRFToken': csrftoken,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        const chats = [...this.state.chats, data];
        this.setState({chats})
    })
    .catch(error => console.log('Error:', error));
  }

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
    .then(data => {if(data.key){
        Cookies.set('Authorization', `Token ${data.key}`);
        this.setState({isLoggedIn:true})
      }})
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
    .then(data => {if(data.key){
        Cookies.set('Authorization', `Token ${data.key}`);
        this.setState({isLoggedIn:true})
      }})
    .catch(error => console.log('Error:', error));
  }

  logOut(){
    const csrftoken = Cookies.get('csrftoken');
    fetch('/api/v1/rest-auth/logout/', {
      method: 'POST',
      headers: {
        'X-CSRFToken': csrftoken,
        'Content-Type': 'application/json',
      }
    })
    .then(response => response.json())
    .then(data => {if(data.detail === 'Successfully logged out.'){
          Cookies.remove('Authorization');
          this.setState({isLoggedIn:false})
        }})
    .catch(error => console.log('Error:', error));
  }


  // async handleLogout(){
  //   const options = {
  //     method:'POST',
  //     headers: {
  //       'X-CSRFToken': Cookies.get('csrftoken'),
  //       'Content-Type': 'application/json',
  //     },
  //   };
  //
  //   const handleError = (err) => console.warn(err);
  //   const response = await fetch('/api/v1/rest-auth/logout/', options)
  //   const data = await response.json().catch(handleError)
  //
  //   if(data.detail === 'Successfully logged out.'){
  //     Cookies.remove('Authorization');
  //   }



  // async registerUser(e, obj){
  //   e.preventDefault();
  //
  //   const options = {
  //     method:'POST',
  //     headers: {
  //       'X-CSRFToken': Cookies.get('csrftoken'),
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(obj),
  //   };
  //
  //   const handleError = (err) => console.warn(err);
  //   const response = await fetch('/api/v1/rest-auth/registration/', options)
  //   const data = await response.json().catch(handleError)
  //
  //   if(data.key){
  //     Cookies.set('Authorization', `Token ${data.key}`);
  //   }
  // }

  render(){
     console.log(this.state.isLoggedIn);
    let html;
    const display = this.state.display;
    if(display === 'register'){
      html = <div className="form"><RegisterForm registerUser={this.registerUser}/></div>
    } else if(display === 'login') {
      html = <div className="form"><LoginForm logIn={this.logIn}/></div>
    }
    let chat;
    const isLoggedIn = this.state.isLoggedIn;
    if(isLoggedIn === true){
      chat = <ChatForm chats={this.state.chats} postChat={this.postChat} logOut={this.logOut}/>
    }
    else {
      chat = ''
    }
    return(
      <React.Fragment>
      {isLoggedIn === false?<div className="mt-5">
        {html}
        <div className="form">
          <button onClick={() => this.setState({display:'login'})} type='button'className="btn btn-link">Already have an account?</button>
          <button onClick={() => this.setState({display:'register'})} type='button'className="btn btn-link">Don't have an account?</button>
        </div>
      </div>
      : <div>{chat}</div>
      }
      </React.Fragment>
    )
  }
}

export default App;

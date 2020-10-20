import React, { Component } from 'react';
import './ChatForm.css'

function Chat(props){
  const chats = props.chats.map(chat => <li className="list-group-item mt-3"key={chat.id}>{chat.message}</li>);
  return(
    <div>
     {chats}
    </div>
  )
}

class ChatForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      user:'',
      message: '',
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event){
    this.setState({[event.target.name]: event.target.value});
  }
  render(){
    return(
      <React.Fragment>
      <div className="form mt-5" onSubmit={(event) => this.props.postChat(event, this.state)}>
        <form className="col-12 col-md-6">
        <div className="form-group">
          <label htmlFor="user">Type number between 1-9</label>
          <input type='text' className="form-control" id="user" name="user" value={this.state.user} onChange={this.handleChange}/>
        </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <input type='text' className="form-control" id="message" name="message" value={this.state.message} onChange={this.handleChange}/>
          </div>
            <button className="btn btn-primary">Post Message</button>
        </form>
      </div>
      <Chat chats={this.props.chats}/>
      </React.Fragment>
    )
  }
}
export default ChatForm

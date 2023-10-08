import React, { Component } from 'react'
import axios from 'axios';

class PostForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userId : '',
         title : '',
         body : ''
      }
    }
    changeHandler = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }
    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state);
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
        .then(res => {
            console.log(res)
        })
        .catch(error => {
            console.log(error)
        })
    }
  render() {
    const { userId, body, title } = this.state;
    return (
      <form onSubmit={this.submitHandler}>
        <input type='text' name = 'userId' onChange = {this.changeHandler} value = {userId}/> <br />
        <input type='text' name = 'title' onChange = {this.changeHandler} value = {title}/> <br />
        <input type='text' name = 'body' onChange = {this.changeHandler} value = {body}/> <br />
        
        <button type = "submit"> Submit </button>

        </form>
    )
  }
}

{
    /*  How to post data to an API from react app.
        we will store the data in the state object and make post request onClick of submit button.
        The post method takes 2nd argument which is the data that has to be sent to API.
        Once the request completes, we either get response or an error.

        Create input fields.
        Tie the values to the state object.
        Make post request in submitHandler.
    
    */
}
export default PostForm
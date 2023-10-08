import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts : [],
         errMsg : ''
      }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res)
            this.setState({posts : res.data})
        })
        .catch(error => {
            console.log(error)
            this.setState({errMsg : 'Error in Retreiving data'})
        })
        
    }
  render() {
    const {posts, errMsg} = this.state
    return (
      <h1>List of Posts 
        {posts.length
          ? posts.map((post) => <div key={post.id}>{post.title} </div>)
          : null }

          {
            errMsg ? <div> {errMsg} </div> : null
          }
        
      </h1>
    )
  }
}

{/* 

    To fetch the data that we want render in UI, we have to request the data to server using HTTP request.

    HTTP request can be done by HTTP library eg: axios.
    install axios and import it in necessary component

    componentDidMount is the method that executed only once in the component life time.
    so it is good for making HTTP requests.

    Call the fake API URL using axios.get method.
    axios is a promise based library, so we should use then, catch blocks.

    Render the response data from URL in UI using map method.
    If there is any error in API call request, then display the error.

*/

}
export default PostList;
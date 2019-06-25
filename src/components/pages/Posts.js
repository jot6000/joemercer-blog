import React, { Component } from 'react';
import './Posts.css';
import PostCard from '../cards/PostCard'
import Footer from '../Footer';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }
  
  setPosts(newArray) {
    console.log(newArray)
    this.setState({ posts: newArray })
  }

  componentDidMount() {
    var Response;
    var xhttp = new XMLHttpRequest();
    var self = this;

    xhttp.open('GET', 'https://joe-mercer-blog-backend.herokuapp.com/postPreviews', true);
    xhttp.onload = function () {
      Response = JSON.parse(this.response)
      console.log(Response)
      self.setPosts(Response)
    };
    xhttp.onerror = function () {
      console.log('Mission aborted')
    }
    xhttp.send(null)
  }
  render() {
    return (
      <>
        <div style={{ display: 'flex', justifyContent: 'center',padding: '3rem' }}>
          <div className='posts-box'>
            {this.state.posts.map((posts) =>
              <PostCard title={posts.title} preview={posts.preview} urlPostfix={posts.urlpostfix} date={posts.date} />
            )}
          </div>
        </div>
        <Footer absolute={true}/>
      </>
    );
  }
}

export default Posts;
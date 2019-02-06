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

    xhttp.open('GET', 'http://localhost:3000/postPreviews', true);
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
      <div>
        <div className='posts-header'>
          <div>Posts</div>
          <div className='subtext'>All blog posts are listed below</div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ Width: '60%' }}>
            {this.state.posts.map((posts) =>
              <div style={{ marginBottom: '25px' }}>
                <PostCard title={posts.title} preview={posts.preview} urlPostfix={posts.urlpostfix} date={posts.date} />
                <br />
              </div>
            )}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Posts;
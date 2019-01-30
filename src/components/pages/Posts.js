import React, { Component } from 'react';
import './Posts.css';
import PostCard from '../cards/PostCard'
import Footer from '../Footer';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          title: 'Post 1',
          preview: 'Safe NPM is a project that aimed to solve an issue with NPM packages not doing what they say they they do.',
          urlPostfix: 'Post1',
          date: new Date('2018-01-29 15:38:00'),
        },
        {
          title: 'Post 2',
          preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
          urlPostfix: 'Post2',
          date: new Date('2018-01-29 15:38:00'),
        },
        {
          title: 'Post 3',
          preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
          urlPostfix: 'Post3',
          date: new Date('2018-01-29 15:38:00'),
        },
      ]
    };
  }
  render() {
    return (
      <div>
        <div className='posts-header'>
          <div>Posts</div>
          <div className='subtext'>All blog posts are listed below</div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ maxWidth: '60%'}}>
            {this.state.posts.map((posts) =>
              <div style={{ marginBottom: '25px'}}>
                <PostCard title={posts.title} preview={posts.preview} urlPostfix={posts.urlPostfix} date={posts.date} />
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
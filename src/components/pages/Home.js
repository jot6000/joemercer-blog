import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className='container'>
        <h1>Welcome</h1>
        <p>This blog is intended to house my proffesional portfolio as well as be a home for some of my more artistic endevours.</p>
        <p>Coming here for the first time I recomend you look at the below links first.</p>
        <div className='links'>1.Lorem</div>
        <div className='links'>2.Ipsum</div>
        <div className='links'>3.Dolar</div>
      </div>
    );
  }
}

export default Home;
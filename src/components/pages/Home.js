import React, { Component } from 'react';
import './Home.css';
import { Link } from "react-router-dom";
import Footer from '../Footer';

class Home extends Component {
  render() {
    return (
      <>
        <div className='container'>
          <h1 className='title'>Welcome</h1>
          <p className='aboutText'>This blog is intended to house my proffesional portfolio as well as be a home for some of my more artistic endevours.</p>
          <br/>
          <br/>
          <br/>
          <p className='aboutText'>Coming here for the first time! I recomend you look at the below links first:</p>
          <Link to="/about" className='links'>1. About</Link>
          <div className='links'>2. Biwegani site</div>
          <div className='links'>3. Fossa File Storage</div>
          <Footer absolute={true}/>
        </div>
      </>
    );
  }
}

export default Home;

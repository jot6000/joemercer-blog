import React, { Component } from 'react';
import './About.css';
import Footer from '../Footer';
import { Link } from "react-router-dom";

class About extends Component {
    render() {
        return (
            <div className='container'>
                <div className='about-header'>About</div>
                <img 
                    className='avatar'
                    src="https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/50914634_1683641551780030_3386822845244899328_n.jpg?_nc_cat=111&_nc_ht=scontent-lht6-1.xx&oh=30a9c6cf9a897f8aca454a82d7094503&oe=5D06ED78" 
                    alt="avatar" 
                    height="240" 
                    width="240"
                />
                <p className='aboutText'>
                    Below you can find some information about me. I have separated them out for your convenience.
                </p>
                <br/>
                <Link to='/about/personalStatement' className='aboutText'>
                    Personal statement.
                </Link>
                <br/>
                <Link to='/about/experiance' className='aboutText'>
                    Qualifications and experiance.
                </Link>
                <br/>
                <Link to='/about/intrests' className='aboutText'>
                    Personal interests.
                </Link>
                <Footer/>
            </div>
        );
    }
}

export default About;
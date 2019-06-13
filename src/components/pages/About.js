import React, { Component } from 'react';
import './About.css';
import { Link } from "react-router-dom";
import Footer from '../Footer';

class About extends Component {
    render() {
        return (
            <>
                <div className='container'>
                    <h1 className='title tight-bottom-margin'>About</h1>
                    <img 
                        className='avatar'
                        src="https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/50914634_1683641551780030_3386822845244899328_n.jpg?_nc_cat=111&_nc_ht=scontent-lht6-1.xx&oh=30a9c6cf9a897f8aca454a82d7094503&oe=5D06ED78" 
                        alt="avatar" 
                        height="200" 
                        width="200"
                    />
                    <p className='about-text'>
                        Below you can find some information about me. I have separated it into these convenient sections:
                    </p>
                    <br/>
                    <Link to='/about/personalStatement' className='about-links'>
                        Personal statement.
                    </Link>
                    <Link to='/about/experiance' className='about-links'>
                        Qualifications and experiance.
                    </Link>
                    <Link to='/about/intrests' className='about-links'>
                        Personal interests.
                    </Link>
                </div>
                <br/>
                <br/>
                <Footer absolute={true}/>
            </>
        );
    }
}

export default About;
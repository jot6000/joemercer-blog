import React, { Component } from 'react';
import './About.css';
import { Link } from "react-router-dom";
import Footer from '../Footer';

class About extends Component {
    render() {
        return (
            <div className='about-body'>
                <div className='about-container'>
                    <h1 className='about-title'>About Me</h1>
                    <div style={{display:'flex',flexDirection:'row'}}>
                        <img
                            src="https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/50914634_1683641551780030_3386822845244899328_n.jpg?_nc_cat=111&_nc_ht=scontent-lht6-1.xx&oh=30a9c6cf9a897f8aca454a82d7094503&oe=5D06ED78" 
                            alt="avatar"
                            height="300"
                            width="300"
                        />
                        <div className='about-content'>
                            <p className='about-content-text'>
                                Below you can find some information about me. I have separated it into these convenient sections for you:
                            </p>
                            <Link to='/about/personalStatement' className='about-links'>
                                - Personal statement
                            </Link>
                            <Link to='/about/experiance' className='about-links'>
                                - Qualifications and experiance
                            </Link>
                            <Link to='/about/intrests' className='about-links'>
                                - Personal interests
                            </Link>
                        </div>
                    </div>
                </div>
                <Footer absolute={true}/>
            </div>
        );
    }
}

export default About;
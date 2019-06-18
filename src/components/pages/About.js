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
                            src="https://i.imgur.com/ylzI7Jr.jpg" 
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
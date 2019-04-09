import React, { Component } from 'react';
import '../About.css';
import Footer from '../../Footer';

class Experiance extends Component {
    render() {
        return (
            <div className='container'>
                <br/>
                <div className='about-header'>Qualifications and Experiance</div>
                <br/>
                <p className='aboutText'>
                    From the title of this blog you may have already guessed that my name is Joe Mercer and I am a Juinor Software Engineer.
                    I started off studying games development through college but decided from the process that I generally enjoyed the programming aspects more than
                    the artsy side, and as such, have not persued games development profesionaly.
                </p>
                <Footer/>
            </div>
        );
    }
}

export default Experiance;
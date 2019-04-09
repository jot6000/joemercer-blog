import React, { Component } from 'react';
import '../About.css';
import Footer from '../../Footer';

class PersonalStatement extends Component {
    render() {
        return (
            <div className='container'>
                <br/>
                <div className='about-header'>Personal Statement</div>
                <br/>
                <p className='aboutText'>
                    From the title of this blog you may have already guessed that my name is Joe Mercer and I am a Juinor Software Engineer.
                    I started off studying games development through college but decided from the process that I generally enjoyed(and was more proficient at) the programming aspects more than
                    the artsy side, and as such, have not persued games development profesionaly.
                </p>
                <p className='aboutText'>
                    From trying out a buisness idea with some friends I learnt that I enjoyed working on the front end of websites. Then from further projects I worked on
                     I found that this is something I would like to try and persue as a career.
                </p>
                <p className='aboutText'>
                    Because of this I am looking for an opertunity to further my web deverlopment skills in a proffesional environment that works with modern frameworks 
                    and languages.
                </p>
                <Footer/>
            </div>
        );
    }
}

export default PersonalStatement;
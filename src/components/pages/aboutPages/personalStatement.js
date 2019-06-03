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
                    From the title of this blog you may have already guessed that my name is Joe Mercer, but I am also a Juinor Software Engineer.
                    I started off studying games development through college but decided from the process that I generally enjoyed(and was more proficient at) the programming aspects more than
                    the artsy side, and as such, have not persued games development profesionaly.
                </p>
                <p className='aboutText'>
                    After trying out a buisness idea with some friends I learnt that I enjoyed working on the front end of websites. Because of this I decided to work on a few
                    more web projects. During this time I became comfortable working with react as it was the library I had been using for all my projects.
                    From this work and my prior professional experiance in buisness automation I was able to figure out that I am passionate about this and would
                    love to persue it as a career.
                </p>
                <p className='aboutText'>
                    An ideal job for me would be one that allows me to polish my react skills in a professional environment so that I can learn all the correct ways of doing 
                    the things I have probably been cobbling together with the software equivilant of duct tape and hot glue.
                </p>
                <Footer/>
            </div>
        );
    }
}

export default PersonalStatement;
import React, { Component } from 'react';
import '../About.css';
import Footer from '../../Footer';



class PersonalStatement extends Component {
    render() {
        return (
            <>
                <article className='tall-container'>
                    <h1 className='title tight-bottom-margin'>Personal Statement</h1>
                    <p className='about-text personal-statement-text'>
                        As the title of this blog suggests, my name is Joe Mercer, and I am a Juinor Software Engineer.
                        My education was in games development but decided I generally enjoyed (and was more proficient at) 
                        the programming aspects more than the artsy side, because of this I did not persue games development profesionaly.
                    </p>
                    <p className='about-text personal-statement-text'>
                        After trying out a buisness idea with some friends I learnt that I enjoyed working on the front end of websites. Because of this I decided to work on a few
                        more web projects. During which I became comfortable working with react as it was the library I had been using for all my projects.
                        From this work and my prior professional experiance in buisness automation I was able to figure out that I am passionate about this and would
                        love to persue it as a career.
                    </p>
                    <p className='about-text personal-statement-text'>
                        An ideal job for me would be one that allows me to polish my react skills in a professional environment. This way I can learn all the correct ways of doing 
                        the things I've probably been cobbling together with the software equivilant of duct tape and hot glue.
                    </p>
                </article>
                <Footer/>
            </>
        );
    }
}

export default PersonalStatement;
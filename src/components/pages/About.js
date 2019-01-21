import React, { Component } from 'react';
import './About.css';
import Footer from '../Footer';

class About extends Component {
    render() {
        return (
            <div className='container'>
                <h1>About</h1>
                <p className='aboutText'>
                    From the title of this blog you may have already guessed that my name is Joe Mercer and I am a Juinor Software Engineer.
                    I started off studying games development through college but decided from the process that I generally enjoyed the programming aspects more than
                    the artsy side, and as such, went on to not make games.
                </p>
                <p className='aboutText'>
                    At my last job I learnt a lot about being a profesional and, through my short stint at the company, gained experiance in sql, Kofax KTM and rpa technoligies
                    using UIPath and Kapow. Although I enjoyed this job for a few reasons I decided to try my hand at other things. During this time, I learnt about web development
                    and more specificaly, React. I have thoroughly these web dev projects and have decided that is where I want to take my career.
                </p>
                <p className='aboutText'>
                    On a more personal note, I have been enjoying my writing and hope to further hone my skills in this hobby. I currently find myself most interested in high
                    fantasy and sci-fi, although definitley more into fantasy, so I will most likely be writing about those the most. My biggest inspiration for my writing would
                    have to be Brandon Sanderson, I find his novels to be very addictive and fun to read, and almost always end up falling in love with the worlds he creates.
                    Because of this I will be posting about writing and world building as well as putting my stories up here.
                </p>
                <Footer/>
            </div>
        );
    }
}

export default About;
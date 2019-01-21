import React, { Component } from 'react';
import './About.css';

class About extends Component {
    render() {
        return (
            <div className='container'>
                <h1>About</h1>
                <p className='aboutText'>
                    From the title of this blog you may have already guessed that my name is Joe Mercer and I am a Juinior Software Engineer.
                    I started off studying games development through college but decided from the process that I generally enjoyed the programing aspects more than
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
                <h4>Other Profiles</h4>
                <div className='profile-footer'>
                    <div className='profileContainer'>
                        <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1024px-Octicons-mark-github.svg.png"/>
                        <a className='link-text' href="https://github.com/jot6000">GitHub</a>
                    </div>
                    <div className='profileContainer'>
                    <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"/>
                        <a className='link-text' href="https://www.linkedin.com/in/joe-mercer-214145149/">LinkedIn</a>
                    </div>
                    <div className='profileContainer'>
                    <img className='logo' src="https://vignette.wikia.nocookie.net/thedescendants/images/8/85/Wattpad-logo.png/revision/latest?cb=20170710213216"/>
                        <a className='link-text' href="https://www.wattpad.com/user/JoeMercer0">WattPad</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
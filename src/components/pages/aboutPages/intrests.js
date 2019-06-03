import React, { Component } from 'react';
import '../About.css';

class Intrests extends Component {
    render() {
        return (
            <div className='container'>
                <br/>
                <div className='about-header'>Interests</div>
                <br/>
                <p className='aboutText'>
                Outside of software development I enjoy a variety of things. I was an avid gamer in my college days and whilst I still enjoy a good session I now lean more
                towards board games or arcade style games as opposed to the highly competitive games I used to play. I currently host a bi-weekly board games night with for my friends,
                and as well as this, I am in the midst of organising more boardgame nights for locals in bucks under the name swajilo games. As well as this I enjoy going to conventions
                such as McM or Hyper Japan and have enjoyed working on cosplays for such events with varying degrees of success. Even if they dont work out I enjoy the process
                of creating the costumes or props used in the cosplays. Lastly(at least for notable hobbies to keep this breif) I enjoy reading novels such as Brandon Sandersons
                mistborn which was the catalyst for me to try my hand at writing my own fiction. When it comes to this, I deeply enjoy creating detailed worlds in which to host
                my stories and find it very fun to sit and worldbuild their histories, religions and politics.
                </p>
            </div>
        );
    }
}

export default Intrests;
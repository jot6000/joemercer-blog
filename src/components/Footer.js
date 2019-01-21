import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className='footer-position'>
                <div className='divider' />
                <h4 className='footer-divider'>Other Profiles</h4>
                <div className='profile-footer'>
                    <div className='profileContainer'>
                        <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1024px-Octicons-mark-github.svg.png" />
                        <a className='link-text' href="https://github.com/jot6000">GitHub</a>
                    </div>
                    <div className='profileContainer'>
                        <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" />
                        <a className='link-text' href="https://www.linkedin.com/in/joe-mercer-214145149/">LinkedIn</a>
                    </div>
                    <div className='profileContainer'>
                        <img className='logo' src="https://vignette.wikia.nocookie.net/thedescendants/images/8/85/Wattpad-logo.png/revision/latest?cb=20170710213216" />
                        <a className='link-text' href="https://www.wattpad.com/user/JoeMercer0">WattPad</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
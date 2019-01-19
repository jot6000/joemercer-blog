import React, { Component } from 'react';
import './ProjectCard.css';

class ProjectCard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='card-container'>
                <div className='card-header'>
                    <h2>{this.props.title}</h2>
                </div>
                <div className='card-contents'>
                    <div style={{ width: '300px' }}>Safe NPM is a project that aimed to solve an issue with NPM packages not doing what they say they they do.</div>
                </div>
                <div className='card-footer'>
                    <button>Read more</button>
                </div>
            </div>
        );
    }
}

export default ProjectCard;
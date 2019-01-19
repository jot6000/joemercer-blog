import React, { Component } from 'react';
import './ProjectCard.css';

class ProjectCard extends Component {
    render() {
        return (
            <div className='card-container'>
                <div className='card-header'>
                    <h2>Project Title</h2>
                </div>
                <div className='card-contents'>
                    <div style={{height:'130px',width:'300px'}}>Content</div>
                </div>
                <div className='card-footer'>
                    <div>Footer</div>
                </div>
            </div>
        );
    }
}

export default ProjectCard;
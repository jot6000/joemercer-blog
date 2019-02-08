import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import './ProjectCard.css';

class ProjectCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
        }
    }

    handleClick = () => {
        this.setState({ redirect: true })
    }

    render() {
        if (this.state.redirect === true) {
            return (
                <Redirect to={{ pathname: ('/projects/' + this.props.urlPostfix), state: { title: this.props.title, urlpostfix: this.props.urlPostfix } }} push={true}></Redirect>
            )
        }
        else {
            return (
                <div className='card-container'>
                    <div className='card-header' onClick={this.handleClick}>
                        {this.props.title}
                    </div>
                    <div className='card-contents'>
                        <div style={{ width: '300px' }}>{this.props.preview}</div>
                    </div>
                    <div className='card-footer'>
                        <button className='read-more' onClick={this.handleClick}>Read more</button>
                    </div>
                </div>
            )
        }
    }
}

export default ProjectCard;
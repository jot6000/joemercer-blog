import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import './PostCard.css';

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
                <Redirect to={{ pathname: ('/post/' + this.props.urlPostfix), state: { title: this.props.title } }} push={true}></Redirect>
            )
        }
        else {
            return (
                <div className='post-overview' onClick={this.handleClick}>
                    <div style={{display:'flex',flexDirection:'row'}}>
                        <li className='post-title'>
                            {this.props.title}
                        </li>
                        <div className='post-date'>{this.props.date.getDate() + '/' + (this.props.date.getMonth() + 1) + '/' + this.props.date.getFullYear()}</div>
                    </div>
                    <div className='post-preview'>{this.props.preview}</div>
                </div>
            )
        }
    }
}

export default ProjectCard;
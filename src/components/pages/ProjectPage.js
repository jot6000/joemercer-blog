import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

class ProjectPage extends Component {
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
                <Redirect to='/projects' push={true}></Redirect>
            )
        }
        else {
            return (
                <div>
                    <button onClick={this.handleClick}>Back</button>
                    <div>{this.props.location.state.title}</div>
                </div>
            );
        }
    }
}

export default ProjectPage;
import React, { Component } from 'react';
import './ProjectPage.css'
const ReactMarkdown = require('react-markdown')

class PostPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: ''
        }
    }
    setContent(newContent) {
        console.log(newContent)
        this.setState({ content: newContent.content })
    }

    componentDidMount() {
        var Response;
        var xhttp = new XMLHttpRequest();
        var self = this;

        console.log('https://joe-mercer-blog-backend.herokuapp.com/postPage/' + this.props.location.state.urlpostfix)
        xhttp.open('GET', 'https://joe-mercer-blog-backend.herokuapp.com/postPage/' + this.props.location.state.urlpostfix, true);
        xhttp.onload = function () {
            Response = JSON.parse(this.response)
            console.log(Response)
            self.setContent(Response)
        };
        xhttp.onerror = function () {
            console.log('Mission aborted')
        }
        xhttp.send(null)
    }
    render() {
        return (
            <div>
                <div className='project-page-header'>
                    {this.props.location.state.title}
                </div>
                <div className='project-page-content'>
                    <ReactMarkdown>{this.state.content.replace(/\n/g, '  \n')}</ReactMarkdown>
                </div>
            </div>
        );
    }
}

export default PostPage;
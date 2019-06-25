import React, { Component } from 'react';
import './Projects.css';
import ProjectCard from '../cards/ProjectCard'

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }

  setProjects(newArray){
    this.setState({projects:newArray})
  }

  componentDidMount(){
    var Response;
    var xhttp = new XMLHttpRequest();
    var self = this;

    xhttp.open('GET', 'https://joe-mercer-blog-backend.herokuapp.com/projectPreviews', true);
    xhttp.onload = function () {
      Response = JSON.parse(this.response)
      console.log(Response)
      self.setProjects(Response)
    };
    xhttp.onerror = function () {
      console.log('Mission aborted')
    }
    xhttp.send(null)
  }

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'row', maxWidth: '100vw', flexWrap: 'wrap',marginLeft:'10vw', paddingTop:'3rem'}}>
        { this.state.projects.map((project) =>
          <div style={{ margin: '25px' }}>
            <ProjectCard title={project.title} preview={project.preview} urlPostfix={project.urlpostfix}></ProjectCard>
          </div>
        )}
      </div>
    );
  }
}

export default Projects;
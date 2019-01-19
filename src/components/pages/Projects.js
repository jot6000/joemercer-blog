import React, { Component } from 'react';
import './Projects.css';
import ProjectCard from '../cards/ProjectCard'

class Projects extends Component {
  render() {
    return (
      <div>
        <h2>Projects</h2>
        <div style={{margin: '20px'}}>
        <ProjectCard></ProjectCard>
        </div>
      </div>
    );
  }
}

export default Projects;
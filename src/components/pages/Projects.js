import React, { Component } from 'react';
import './Projects.css';
import ProjectCard from '../cards/ProjectCard'

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          title: 'Safe NPM',
          preview: 'Safe NPM is a project that aimed to solve an issue with NPM packages not doing what they say they they do.',
          urlPostfix: 'SafeNPM'
        },
        {
          title: 'Workout Tracker',
          preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
          urlPostfix: 'WorkoutTracker'
        },
        {
          title: 'Productivity Manager',
          preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
          urlPostfix: 'ProductivityManager'
        },
      ]
    };
  }
  render() {
    return (
      <div>
        <h2>Projects</h2>
        <div style={{display:'flex',flexDirection:'row',maxWidth:'100%',justifyContent:'center'}}>
          {this.state.projects.map((project) =>
            <div style={{ margin: '20px' }}>
              <ProjectCard title={project.title} preview={project.preview} urlPostfix={project.urlPostfix}></ProjectCard>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Projects;
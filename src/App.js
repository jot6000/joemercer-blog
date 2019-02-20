import React, { Component } from 'react';
import About from './components/pages/About'
import Home from './components/pages/Home'
import Posts from './components/pages/Posts'
import Projects from './components/pages/Projects'
import ProjectPage from './components/pages/ProjectPage'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <div className="App-header">
            <Link to="/" className="Nav-home">
              Joe Mercer's Blog
            </Link>
          </div>
          <div>
            <div className="App-navBar">
              <Link className="Nav-Button" to="/about">About</Link>
              <div style={{ height: '30px', background: 'grey', width: '1px' }} />
              <Link className="Nav-Button" to="/posts">Posts</Link>
              <div style={{ height: '30px', background: 'grey', width: '1px' }} />
              <Link className="Nav-Button" to="/projects">Projects</Link>
            </div>
            <div style={{ height: '1px', background: 'grey', width: '65vw', marginLeft: '17.5vw' }} />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/posts" component={Posts} />
            <Switch>
              <Route path="/projects/:projectName" component={ProjectPage} />
              <Route path="/projects" component={Projects} />
            </Switch>
          </div>
        </>
      </Router>
    );
  }
}

export default App;

import React, { Component } from 'react';
import About from './components/pages/About'
import Home from './components/pages/Home'
import Posts from './components/pages/Posts'
import Projects from './components/pages/Projects'
import ProjectPage from './components/pages/ProjectPage'
import PostPage from './components/pages/PostPage'
import PersonalStatement from './components/pages/aboutPages/personalStatement'
import Experiance from './components/pages/aboutPages/experiance'
import Intrests from './components/pages/aboutPages/intrests'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: {
        HOME: 'home',
        ABOUT: 'about',
        POSTS: 'posts',
        PROJECTS: 'projects'
      },
      currentPage: 'home',
    }
  }

  setCurrentPage = (newPage) => {
    this.setState({currentPage:newPage})
    console.log(this.state.currentPage)
  }

  render() {
    return (
      <Router>
        <div className="app-background">
          <div> 
            <div className="App-header-title">
              <Link to="/" className="Nav-home" onClick={()=>this.setCurrentPage(this.state.page.HOME)}>
                Joe Mercer's Blog
              </Link>
            </div>
            <div className="App-navBar">
                <Link className={this.state.currentPage == this.state.page.ABOUT ? "Nav-Button-selected":"Nav-Button"} to="/about" onClick={()=>this.setCurrentPage(this.state.page.ABOUT)}>About</Link>
                <Link className={this.state.currentPage == this.state.page.POSTS ? "Nav-Button-selected":"Nav-Button"} to="/posts" onClick={()=>this.setCurrentPage(this.state.page.POSTS)}>Posts</Link>
                <Link className={this.state.currentPage == this.state.page.PROJECTS ? "Nav-Button-selected":"Nav-Button"} to="/projects" onClick={()=>this.setCurrentPage(this.state.page.PROJECTS)}>Projects</Link>
            </div>
            <div>
              <Route exact path="/" component={Home} />
              <Switch>
                <Route path="/about/personalStatement" component={PersonalStatement} />
                <Route path="/about/experiance" component={Experiance} />  
                <Route path="/about/intrests" component={Intrests} />  
                <Route path="/about" component={About} />
              </Switch>
              <Switch>
                <Route path="/posts/:postName" component={PostPage} />
                <Route path="/posts" component={Posts} />
              </Switch>
              <Switch>
                <Route path="/projects/:projectName" component={ProjectPage} />
                <Route path="/projects" component={Projects} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

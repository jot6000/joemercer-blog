import React, { Component } from 'react';
import './Home.css';
import { Link } from "react-router-dom";
import Footer from '../Footer';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

function content1(content){
  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
      <h1 className='title'>Welcome</h1>
    </div>
  )
}

function content2(content){
  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
      <p className='aboutText'>This blog is intended to house my proffesional portfolio as well as be a home for some of my more artistic endevours.</p>
    </div>
  )
}

function content3(content){
  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
      <p className='aboutText'>Coming here for the first time! I recomend you look at the below links first:</p>
      <Link to="/about" className='links'>1. About</Link>
      <div className='links'>2. Biwegani site</div>
      <div className='links'>3. Fossa File Storage</div>
    </div>
  )
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: 1
    }
}
chooseContent = (content) => {
  switch(this.state.content) {
    case 1:
      return content1(content);
    case 2:
        return content2(content);
    case 3:
        return content3(content);
    default:
    return content1(content)
  }
}
incrementContent = () =>{
  if(this.state.content < 3)
  {
    this.setState({content:this.state.content+1})
  }
}
decrementContent = () =>{
  if(this.state.content > 1)
  {
    this.setState({content:this.state.content-1})
  }
}
  render() {
    return (
      <>
        <div className='container'>
          <div className='home-container'>
            <NavigateBeforeIcon 
              style={{ fontSize: 70, cursor:'pointer', color : this.state.content > 1 ? 'white':'rgba(40,40,40,0.4)'}} 
              onClick={this.decrementContent}
            />
            <div className='home-content'>
              {this.chooseContent(this.state.content)}
            </div>
            <NavigateNextIcon style={{ fontSize: 70, cursor:'pointer', color : this.state.content < 3 ? 'white':'rgba(40,40,40,0.4)'}} onClick={this.incrementContent}/>
          </div>
          <div>
            <div className={this.state.content === 1 ? 'dot-selected' : 'dot'}/>
            <div className={this.state.content === 2 ? 'dot-selected' : 'dot'}/>
            <div className={this.state.content === 3 ? 'dot-selected' : 'dot'}/>
          </div>
        </div>
        <Footer absolute={true}/>
      </>
    );
  }
}

export default Home;

import React, { Component } from 'react';
import './Home.scss';
import { Link } from "react-router-dom";
import Footer from '../Footer';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: 1,
      offset: 0
    }
}
incrementContent = () =>{
  if(this.state.content < 3)
  {
    this.setState({content:this.state.content+1,offset:this.state.offset+2000})
  }
}
decrementContent = () =>{
  if(this.state.content > 1)
  {
    this.setState({content:this.state.content-1,offset:this.state.offset-2000})
  }
}
  render() {
    return (
      <>
        <div className='container'>
          <div className='home-container'>
            <NavigateBeforeIcon 
              style={{ marginRight:'800px',fontSize: 70, cursor:'pointer', color : this.state.content > 1 ? 'white':'rgba(40,40,40,0.4)'}} 
              onClick={this.decrementContent}
            />
            <div className='home-content' style={{transform:`translateX(-${this.state.offset}px)`}}>
              <div style={{display:'flex',flexDirection:'column',alignItems:'center',flex:'1',width:'700px'}}>
                <h1 className='title'>Welcome</h1>
              </div>
              <div style={{display:'flex',flexDirection:'column',alignItems:'center',flex:'1',marginLeft:'1500px',minWidth:'700px'}}>
                <p className='aboutText' style={{textAlign:'center'}}>This blog is intended to house my proffesional portfolio as well as be a home for some of my more artistic endevours.</p>
              </div>
              <div style={{display:'flex',flexDirection:'column',alignItems:'center',flex:'1',marginLeft:'1300px',minWidth:'700px'}}>
                <p className='aboutText' style={{textAlign:'center'}}>Coming here for the first time! I recomend you look at the below links first:</p>
                <Link to="/about" className='links'>1. About</Link>
                <div className='links'>2. Biwegani site</div>
                <div className='links'>3. Fossa File Storage</div>
              </div>
            </div>
            <NavigateNextIcon style={{ zIndex:'100',fontSize: 70, cursor:'pointer', color : this.state.content < 3 ? 'white':'rgba(40,40,40,0.4)'}} onClick={this.incrementContent}/>
          </div>
          <div>
            <div className='dot' style={this.state.content === 1 ? {transform:'scale(1.6)'} : {transform:'scale(1)'}}/>
            <div className='dot' style={this.state.content === 2 ? {transform:'scale(1.6)'} : {transform:'scale(1)'}}/>
            <div className='dot' style={this.state.content === 3 ? {transform:'scale(1.6)'} : {transform:'scale(1)'}}/>
          </div>
        </div>
        <Footer absolute={true}/>
      </>
    );
  }
}

export default Home;

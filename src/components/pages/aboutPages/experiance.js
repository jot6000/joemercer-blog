import React, { Component } from 'react';
import '../About.css';
import Footer from '../../Footer';

class Experiance extends Component {
    render() {
        return (
            <div className='container'>
                <br />
                <div className='about-header'>Qualifications and Experiance</div>
                <br />
                <div style={{color:"#303030",fontSize:'26pt',marginBottom:'10px'}}>
                    1.Education
                </div>
                <div style={{display:'flex',marginBottom:'18px'}}>
                    <div style={{boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)", display:'flex', flexDirection: 'column', alignItems: "center",padding:"10px", width:'30vw',marginRight:'2vw'}}>
                        <div style={{fontSize:"16pt", marginBottom:'10px'}}>HND level 5, Games Development</div>
                        <div style={{ height: '1px', background: 'grey',width:'100%'}} />
                        <div style={{fontSize:"12pt", marginBottom:'10px',fontFamily: 'Open Sans, sans-serif'}}>October 2015 - July 2017</div>
                        <div style={{fontSize:"12pt", marginBottom:'10px',fontFamily: 'Open Sans, sans-serif'}}>Uxbridge College, Uxbridge, London</div>
                        <div>Grade:</div>
                        <div>Distinction</div>
                    </div>
                    <div style={{boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)", display:'flex', flexDirection: 'column', alignItems: "center",padding:"10px", width:'30vw',marginRight:'2vw'}}>
                        <div style={{fontSize:"16pt", marginBottom:'10px'}}>BTEC level 3 Extended Diploma, Games Development</div>
                        <div style={{ height: '1px', background: 'grey',width:'100%'}} />
                        <div style={{fontSize:"12pt", marginBottom:'10px',fontFamily: 'Open Sans, sans-serif'}}>September 2013 - June 2015.</div>
                        <div style={{fontSize:"12pt", marginBottom:'10px',fontFamily: 'Open Sans, sans-serif'}}>Uxbridge College, Uxbridge, London</div>
                        <div>Grade:</div>
                        <div>Distinction*, Distinction, Distinction</div>
                    </div>
                    <div style={{boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)", display:'flex', flexDirection: 'column', alignItems: "center",padding:"10px", width:'30vw'}}>
                        <div style={{fontSize:"16pt", marginBottom:'10px'}}>GCSE’s</div>
                        <div style={{ height: '1px', background: 'grey',width:'100%'}} />
                        <div style={{fontSize:"12pt", marginBottom:'10px',fontFamily: 'Open Sans, sans-serif'}}>September 2011 – June 2013</div>
                        <div style={{fontSize:"12pt", marginBottom:'10px',fontFamily: 'Open Sans, sans-serif'}}>Chalfont Community College, Chalfont St Peter, Buckinghamshire</div>
                        <div>Grade:</div>
                        <div>10 GCSEs, including English, Maths and Science at grades A*-C</div>
                    </div>
                </div>
                <div style={{color:"#303030",fontSize:'26pt',marginBottom:'10px'}}>
                    2.Career
                </div>
                <Footer />
            </div>
        );
    }
}

export default Experiance;
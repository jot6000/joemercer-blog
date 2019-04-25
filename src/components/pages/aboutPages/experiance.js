import React, { Component } from 'react';
import '../About.css';
import Footer from '../../Footer';
import QualificationCard from '../../cards/QualificationCard';

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
                    <QualificationCard
                        title = "HND level 5, Games Development"
                        date = "October 2015 - July 2017"
                        location = "Uxbridge College, Uxbridge, London"
                        grade = "Distinction"
                    />
                    <QualificationCard
                        title = "BTEC level 3 Extended Diploma, Games Development"
                        date = "September 2013 - June 2015"
                        location = "Uxbridge College, Uxbridge, London"
                        grade = "Distinction*, Distinction, Distinction"
                    />
                    <QualificationCard
                        title = "GCSE’s"
                        date = "September 2011 – June 2013"
                        location = "Chalfont Community College, Chalfont St Peter, Buckinghamshire"
                        grade = "10 GCSEs, including English, Maths and Science at grades A*-C"
                    />
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
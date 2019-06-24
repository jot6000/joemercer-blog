import React, { Component } from 'react';
import '../About.css';
import QualificationCard from '../../cards/QualificationCard';
import CareerCard from '../../cards/CareerCard';
import Footer from '../../Footer';

class Experiance extends Component {
    render() {
        return (
            <div className='container'>
                <br />
                <div className='about-header'>Qualifications and Experience</div>
                <br />
                <div style={{color:"white",fontSize:'26pt',marginBottom:'10px'}}>
                    Education
                </div>
                <div style={{display:'flex',marginBottom:'18px', padding: '0px'}}>
                    <QualificationCard
                        title = "BTEC level 3 (Games Dev)"
                        date = "2013 - 2015"
                        location = "Uxbridge College"
                        grade = "Distinction*, Distinction, Distinction"
                        type = "hnd"
                    />
                    <QualificationCard
                        title = "HND level 5 (Games Dev)"
                        date = "2015 - 2017"
                        location = "Uxbridge College"
                        grade = "Distinction"
                        type = "btec"
                    />
                    <QualificationCard
                        title = "GCSE’s"
                        date = "2011 – 2013"
                        location = "Chalfont Community College"
                        grade = "10 GCSEs A*-C (Including English, Maths, and Science)"
                        type = "gcse"
                    />
                </div>
                <div style={{color:"white",fontSize:'26pt',marginBottom:'10px'}}>
                    Career
                </div>
                <CareerCard
                    title = "Data Capture Solutions"
                    jobTitle = "Juinior Software Engineer"
                    date = "2017 - 2018"
                    location = "Slough, Buckinghamshire"
                    overview = "At DCS I worked to deliver client solutions using an array of kofax technoligies, the job taught me a lot about professionalism and allowed me to gain experiance working with clients and in a proffesional team."
                    responsibilities = {['Delivering software solutions', 'Supporting clients software issues', 'Working in both a team and independently']}
                    tech = {['Visual basic', 'Kofax capture', 'Kofax KTM','UIpath','Kapow','SQL']}
                />
                <Footer absolute/>
            </div>
        );
    }
}

export default Experiance;
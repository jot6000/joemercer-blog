import React, { Component } from 'react';
import './QualificationCard.css';

class QualificationCard extends Component {
    render() {
        return (
            <div className="education-card">
                <div className="education-title">{this.props.title}</div>
                <div className="education-divider"/>
                <div className="education-details">{this.props.date}</div>
                <div className="education-details">{this.props.location}</div>
                <div>Grade:</div>
                <div>{this.props.grade}</div>
            </div>
        )
    }
}

export default QualificationCard;
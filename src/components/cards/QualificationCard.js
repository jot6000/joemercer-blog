import React, { Component } from 'react';
import './ExperianceCards.css';

class QualificationCard extends Component {
    render() {
        return (
            <div className="experiance-card">
                <div className="experiance-title">{this.props.title}</div>
                <div className="experiance-divider"/>
                <div className="experiance-details">{this.props.date}</div>
                <div className="experiance-details">{this.props.location}</div>
                <div>Grade:</div>
                <div>{this.props.grade}</div>
            </div>
        )
    }
}

export default QualificationCard;
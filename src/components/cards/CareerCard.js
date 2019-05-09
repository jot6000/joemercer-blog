import React, { Component } from 'react';
import './ExperianceCards.css';

class CareerCard extends Component {
    render() {
        return (
            <div className="experiance-card">
                <div className="experiance-title">{this.props.title}</div>
                <div className="experiance-divider"/>
                <div className="experiance-details">{this.props.jobTitle}</div>
                <div className="experiance-details">{this.props.date}</div>
                <div className="experiance-details">{this.props.location}</div>
                <div className="experiance-divider-small"/>
                <div className="experiance-more">Click for more details</div>
            </div>
        )
    }
}

export default CareerCard;
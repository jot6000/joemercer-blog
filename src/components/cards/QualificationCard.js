import React, { Component } from 'react';
import './ExperianceCards.css';

class QualificationCard extends Component {
    render() {
        const type = this.props.type;
        return (
            <article className={"experiance-card "+type+"-body"}>
                <header className={"experiance-header "+type+"-bar"}>
                    <div className="experiance-header-title">
                        <div className="experiance-title">{this.props.title}</div>
                        <div className="experiance-date">{this.props.date}</div>
                    </div>
                    <div className="experiance-location">{this.props.location}</div>
                </header>
                <div className="experiance-divider"/>
                <footer className={"experiance-footer "+type+"-bar"}>
                    <div>{this.props.grade}</div>
                </footer>
            </article>
        )
    }
}

export default QualificationCard;
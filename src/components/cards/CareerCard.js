import React, { Component } from 'react';
import Modal from 'react-responsive-modal'; 
import './ExperianceCards.css';

class CareerCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }
    openModal = () => {
        this.setState({ open: true });
      };
     
      onCloseModal = () => {
        this.setState({ open: false });
      };
    render() {
        return (
            <div className="experiance-card">
                <Modal
                    open={this.state.open}
                    onClose={this.onCloseModal}
                    center
                >
                    <h3 className={'experiance-title'}>Overview</h3>
                    <div className={'experiance-details'}>{this.props.overview}</div>
                    <h3 className={'experiance-title'}>Responsibilities</h3>
                    {this.props.responsibilities.map((responsibility)=>
                      <li className={'experiance-details'}>{responsibility}</li>
                    )}
                    <h3 className={'experiance-title'}>Technologies used</h3>
                    {this.props.tech.map((technoligy)=>
                      <li className={'experiance-details'}>{technoligy}</li>
                    )}
                </Modal>
                <div className="experiance-title">{this.props.title}</div>
                <div className="experiance-divider"/>
                <div className="experiance-details">{this.props.jobTitle}</div>
                <div className="experiance-details">{this.props.date}</div>
                <div className="experiance-details">{this.props.location}</div>
                <div className="experiance-divider-small"/>
                <div className="experiance-more"
                    onClick={this.openModal}
                >
                    Click for more details
                </div>
            </div>
        )
    }
}

export default CareerCard;
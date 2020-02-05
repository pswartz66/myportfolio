import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './FrontCard.css';

const FrontCard = (props) => {

    return (

            <div className="front-card-container">
                <Col className="sub-card-col">
                    <Card onClick={props.onClick} className="front-card">
                        <Card.Body className="front-card-body">
                            <i class="fa fa-github fa-4x github-icon"></i>
                        </Card.Body>
                        <Card.Footer className="front-card-footer">Github</Card.Footer>
                    </Card>
                </Col>
                <Col className="sub-card-col">
                    <Card onClick={props.onClick} className="front-card">
                        <Card.Body className="front-card-body">
                            <i class="fa fa-github fa-4x github-icon"></i>
                        </Card.Body>
                        <Card.Footer className="front-card-footer">Github</Card.Footer>
                    </Card>
                </Col>
            </div>
            
    )
}

export default FrontCard;
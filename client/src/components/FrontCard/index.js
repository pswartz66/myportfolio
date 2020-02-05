import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './FrontCard.css';

const FrontCard = (props) => {

    return (

            <div className="front-card-container">
                <Col className="sub-card-col">
                    <Card className="front-card">
                        {/* <Card.Img className="front-card-img" variant="top" src="holder.js/100px180" /> */}
                        <Card.Body>
                            <Card.Text className="front-card-text">
                                Some quick text
                            </Card.Text>
                            <Button onClick={props.onClick} type="submit" variant="primary">Lets connect!</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </div>

    )

}

export default FrontCard;
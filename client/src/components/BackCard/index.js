import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './BackCard.css';

const BackCard = (props) => {

    return (

        <div>
            <div className="back-card-container">

                <Col className="sub-card-col">
                    <Card className="back-card">
                        <Card.Body>
                            <Card.Text className="back-card-text">
                                Github
                            </Card.Text>
                            <Button onClick={props.onClick} type="submit" variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                </div>
        </div>
    )
}

export default BackCard;
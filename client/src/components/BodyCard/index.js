import React from 'react';
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './BodyCard.css';

const BodyCard = props => {

    return (
        <div>
                <Row>
                    <Col className="col-sm-12 col-md-12 col-lg-12">
                        <div id="section2" className="bodyContainer">
                            <h2 className="d-flex justify-content-start">Phil Swartz</h2>
                        </div>
                    </Col>
                </Row>
        </div>
    )
}

export default BodyCard;
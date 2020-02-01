import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './HomeTopCard.css';

const HomeTopCard = props => {
    return (
        <Container>
            <div className="home-top-container">
                <Row>
                    <Col className="col-sm-12 col-md-12 col-lg-12">
                        <Card className="mycard">
                            <Card.Body className="mycardbody">
                                {/* <h1 className="myname">Phillip Swartz</h1> */}
                                <svg viewBox="0 0 1460 250">
                                    <symbol id="s-text">
                                        <text text-anchor="middle" x="50%" y="80%">Phillip Swartz</text>
                                    </symbol>
                                    <g class="g-ants">
                                        <use xlinkHref="#s-text" className="text-copy"></use>
                                        <use xlinkHref="#s-text" className="text-copy"></use>
                                        <use xlinkHref="#s-text" className="text-copy"></use>
                                        <use xlinkHref="#s-text" className="text-copy"></use>
                                        <use xlinkHref="#s-text" className="text-copy"></use>
                                    </g>
                                </svg>
                            </Card.Body>
                        </Card >
                    </Col >
                </Row >
            </div >
        </Container >

    )
}

export default HomeTopCard; 
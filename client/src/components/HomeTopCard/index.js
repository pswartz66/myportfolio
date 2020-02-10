import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
// import profileImg from '../../assets/img/ProfilePicture.jpg';
// import FontAwesome from 'react-fontawesome'
import './HomeTopCard.css';

const HomeTopCard = props => {
    return (
        <Container>
            <div className="home-top-container">
                <Row>
                    <Col className="col-sm-12 col-md-12 col-lg-12">
                        <Card className="mycard">
                            <Card.Body onClick={props.onClick} className="mycardbody">

                                {/* <h1 className="myname">Phillip Swartz</h1> */}
                                <svg viewBox="0 0 1460 250">
                                    <symbol id="s-text">
                                        <text className="myname" textAnchor="middle" x="50%" y="80%">Phil Swartz</text>
                                    </symbol>
                                    <g className="g-ants">
                                        <use xlinkHref="#s-text" className="text-copy"></use>
                                        <use xlinkHref="#s-text" className="text-copy"></use>
                                        <use xlinkHref="#s-text" className="text-copy"></use>
                                        <use xlinkHref="#s-text" className="text-copy"></use>
                                        <use xlinkHref="#s-text" className="text-copy"></use>
                                    </g>
                                </svg>

                            </Card.Body>



                            {/* <Container> */}
                                {/* <Row> */}

                                    <div className="sub-head-container">

                                        <Col className="sub-head-col">
                                            <div className="sub-name-heading">Web Developer</div>
                                        </Col>
                                        <Col className="sub-head-col">
                                            <div className="sub-name-heading">Financial Analyst</div>
                                        </Col>
                                        <Col className="sub-head-col">
                                            <div className="sub-name-heading">Music Producer</div>
                                        </Col>
                                    </div>

                                    <div className="sub-head-container">
                                       
                                        <i className="arrow down"></i>
                                    </div>


                                {/* </Row> */}

                            {/* </Container> */}


                            <br>
                            </br>
                        </Card>
                    </Col>
                </Row>
            </div>

        </Container >

    )
}

export default HomeTopCard; 
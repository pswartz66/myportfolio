import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactCardFlip from 'react-card-flip';
import FrontCard from '../FrontCard';
import BackCard from '../BackCard';
import './Body.css';

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFlipped: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    render() {
        return (
            <div>
                <div id="section2" className="bodyContainer">
                    <Row>
                        <Col className="col-12">
                            <h2 className="d-flex justify-content-start p-4">Phil Swartz</h2>
                            <div>
                                <p className="intro">
                                    Phil recently graduated from the Penn LPS coding bootcamp.
                                    There he learned how to build <span className="strong-text">full stack</span> websites using languages like
                                    <span className="strong-text"> javascript</span>, html, and css in conjunction with <span className="strong-text"> nodeJS</span>, mySQL, and mongoDB.
                                    In addition he spent time creating <span className="strong-text"> React</span> apps, learning multiple api's,
                                    and handled routing <span className="strong-text">data</span> via client server using <span className="strong-text">Express</span> middleware. In
                                    his free time he likes to ride his bike through the streets of <span className="strong-text">Philadelphia</span>,
                                    make cool videos with his GoPro, and produce music.
                                </p>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
                                <FrontCard onClick={this.handleClick} />
                                <BackCard onClick={this.handleClick} />
                            </ReactCardFlip>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default Body;
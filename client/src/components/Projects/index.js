import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';


import './Projects.css';

const Projects = (props) => {
    return (
        <div>
            <div className="projectsContainer">
                <Row>
                    <Col className="col-12">
                        <h2 className="d-flex justify-content-center p-4">Projects</h2>
                    </Col>
                </Row>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col className="col-sm-3 left-nav">
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Patient First</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">iPlaylist</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Song Sparrow</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col className="col-sm-9 right-nav">
                            <Row>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">

                                        <Col className="col-12 p-0">
                                            <Card className="project-card">
                                                <Card.Body className="project-card-body">
                                                    <i class="fa fa-github fa-4x github-icon"></i>
                                                    <a className="div-tag" href="https://github.com/maleszewskid/Project-3">Check it out on Github</a>
                                                </Card.Body>
                                                <Card.Footer className="project-card-footer">Contributers: slevy239, dom, jackryan, pswartz66</Card.Footer>
                                            </Card>
                                            <div className="patient-first-desc">Patient First is a health data collection app.
                                                It allows users to quickly and easily upload health-related
                                                data, view trends and share with their primary care providers.
                                                Allowing for providers to have more data on a patient’s daily
                                                        health trends to better diagnose/treat their conditions.</div>
                                            <div className="patient-first-desc">For this project I took on multiple roles.
                                            I built some of the front end pages and design and also contributed to setting up
                                            the mongoDB models. One of the cool features I added was a sentiment calculator. The
                                            functionality works like this, a user types an entry into their journal and in real time
                                            they get assigned a dynamic score based on the positive and negative words the've chosen
                                            to write. This then gets passed to the database with historical records which can then
                                            be plotted on a chart for a Doctor to see.
                                                        </div>

                                        </Col>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <Card className="project-card">
                                            <Card.Body className="project-card-body">
                                                <i class="fa fa-github fa-4x github-icon"></i>
                                                <a className="div-tag" href="https://github.com/Slevy239/iPlaylist">Check it out on Github</a>
                                            </Card.Body>
                                            <Card.Footer className="project-card-footer">Contributers: slevy239, jackryan, pswartz66</Card.Footer>
                                        </Card>
                                        <div className="patient-first-desc">iPlaylist is a fully customizable web application where
                                                    users can create their own playlists and contribute to the community playlist.</div>
                                        <div className="patient-first-desc">This site leverages the deezer music api to find previews of songs.
                                            I focused mainly on manipulating the api response data into arrays and objects
                                            used jquery functions to update the DOM.
                                                    </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <Card className="project-card">
                                            <Card.Body className="project-card-body">
                                                <i class="fa fa-github fa-4x github-icon"></i>
                                                <a className="div-tag" href="https://github.com/gainstrive/song-sparrow">Check it out on Github</a>
                                            </Card.Body>
                                            <Card.Footer className="project-card-footer">Contributers: gainstrive, pav6778, pswartz66</Card.Footer>
                                        </Card>
                                        <div className="patient-first-desc">Song Sparrow is another music application. This time user's can create
                                                    a fan page, save their favorite artists, and learn about song lyrics.</div>
                                        <div className="patient-first-desc">We used the genius music api for music related info and seatgeek for
                                        looking up a bands concerts and ticket prices. The front end is using JS, ajax, html, and css and on the backend
                                        we're storing search criteria and chats in google's firebase database.
                                                    </div>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Row>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        </div>
    )
}

export default Projects;
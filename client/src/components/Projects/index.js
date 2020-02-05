import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Projects.css';

const Projects = (props) => {
    return (
        <div>
            <div className="projectsContainer">
                <Row>
                    <Col className="col-12">
                        <h2 className="d-flex justify-content-start">Projects</h2>

                        <div>

                        </div>


                    </Col>
                </Row>

                <Row>
                    <Col>
                        <h4 className="d-flex justify-content-start">Name</h4>
                    </Col>
                </Row>

            </div>
        </div>
    )
}

export default Projects;
import React from 'react';
import Card from 'react-bootstrap/Card';
import ArgumentImg from '../../assets/img/argument.jpg';
import PalmTrees from '../../assets/img/palmtrees.jpg';
import RockClimb from '../../assets/img/rockclimb.jpg';



// import SorrySong from '../../assets/audio/Sorry_instrumental.mp3';
import './Player.css';

const Player = (props) => {

    return (
        <div>
            <div className="musicContainer">
                <div className="d-flex justify-content-center p-5">
                    Listen to some of my instrumentals... I write lyrics too? Fill out the contact form below
                    to collab.
                </div>
                    {/* <div className="mask gradient-card align-items-center"> */}
                    <div className="container d-flex justify-content-center">
                        <div className="box">
                            <h4 className="my-0 h5 text-center">Just click<i className="fa fa-play p-4"></i></h4>
                            <Card id="myPlayer">
                                <Card.Body classsName="audio-image">
                                    <img alt="audioPicture" src={RockClimb} />

                                </Card.Body>
                                {/* <audio className="audio-player" controls="controls">
                                    Your browser does not support the &lt;audio&gt; tag.
                                                <source src={SorrySong} />
                                </audio> */}

                                <div className="play-control-icons">
                                    <i onClick={props.onClick} className="fa fa-backward fa-2x backward"></i>
                                    <i onClick={props.onClick} className="fa fa-play-circle fa-3x play"></i>
                                    <i onClick={props.onClick} className="fa fa-pause-circle fa-3x pause"></i>
                                    <i onClick={props.onClick} className="fa fa-forward fa-2x forward"></i>

                                </div>
                                <Card.Footer className="container">
                                    <div>
                                        Track title goes here
                                    </div>
                                </Card.Footer>

                            </Card>
                        </div>
                    </div>
                {/* </div> */}
            </div>


        </div>
    )
}


export default Player;
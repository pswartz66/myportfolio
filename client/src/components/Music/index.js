import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import ArgumentImg from '../../assets/img/argument.jpg';
import SorrySong from '../../assets/audio/Sorry_instrumental.mp3';

import './Music.css';


class Music extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playlist: ['../../assets/audio/Sorry_instrumental.mp3', 
                        '../../assets/audio/Sorry_instrumental.mp3', 
                        '../../assets/audio/Sorry_instrumental.mp3'],
            IsPlaying: false,
        }
    }



    render() {

        return (

            <div>
                <div className="musicContainer">
                    Hello Music section
                    <div className="mask gradient-card align-items-center">
                        <div className="container d-flex justify-content-center my-4">
                            <div className="box">
                                <h4 className="my-5 h5 text-center">Just click<i className="fa fa-play p-4"></i></h4>
                                <Card id="player">
                                    <Card.Body classsName="audio-image">
                                        <img alt="audio-image" src={ArgumentImg} />
                                        
                                    </Card.Body>
                                    <audio className="audio-player" controls="controls">
                                            Your browser does not support the &lt;audio&gt; tag.
                                                <source src={SorrySong} />
                                        </audio>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        )
    }

}

export default Music;
import React, { Component } from 'react';
import Player from '../Player';
import './Music.css';


class Music extends Component {
    constructor(props) {
        super(props);
        this.state = {
            IsPlaying: false,
            
        }

        let playlist = [
            {
                src: '../../assets/audio/Sorry_instrumental.mp3',
                author: 'Phil Swartz',
                title: 'Sorry'
            },
            {
                src: '../../assets/audio/Main_C_instrumental.p3',
                author: 'Phil Swartz',
                title: 'The Main One'
            },
            {
                src: '../../assets/audio/ZeroKBeez2_instrumental.mp3',
                author: 'Phil Swartz',
                title: 'No Limits'
            }
        ];
    }

    handleControlClick = (event) => {
        event.preventDefault();
        console.log('clicked');
    }
    

        render() {
            return (
                <div>
                    <Player onClick={this.handleControlClick}/>
                </div>
            )
        };
    }


export default Music;
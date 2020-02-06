import React, { Component } from 'react';
import './Music.css';


class Music extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPlaying: false,
            tracks: []
        }
    }

    render() {

        return (

            <div>
                <div className="musicContainer">
                    Hello Music section
                </div>

            </div>
        )
    }
}

export default Music;
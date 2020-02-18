import React from 'react';
import Sound from 'react-sound';
import SorrySong from '../../assets/audio/Sorry_instrumental.mp3';
import MainSong from '../../assets/audio/Main_C_instrumental.mp3';
import ZeroKSong from '../../assets/audio/ZeroKBeez2_instrumental.mp3';

const MySound = (props) => {
    console.log('test output ' + Sound.onload);
    console.log('test output ' + props.songMP3);
    // const playClicked = props.onPlayClick;

    let songURL = props.songMP3;

    if (props.songMP3 === '../../assets/audio/Sorry_instrumental.mp3') {
        songURL = SorrySong;
    } else if (props.songMP3 === '../../assets/audio/Main_C_instrumental.mp3') {
        songURL = MainSong;
    } else {
        songURL = ZeroKSong;
    }

    // if (props.onPlayClick) {
    //     console.log('you clicked play button')
    // }

    return (
        <div>

            <Sound
                url={songURL}
                playStatus={Sound.status.PLAYING}
                playFromPosition={300 /* in milliseconds */}
                volume={100}
            // onLoading={this.handleSongLoading}
            // onPlaying={this.handleSongPlaying}
            // onFinishedPlaying={this.handleSongFinishedPlaying}
            />

        </div>
    );
}

export default MySound;

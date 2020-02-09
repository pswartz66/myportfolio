import React, { Component } from 'react';
import Player from '../Player';
import './Music.css';


class Music extends Component {
    constructor(props) {
        super(props);
        this.state = {
            IsPlaying: false,
            currentImageShown: '../../assets/img/argument.jpg',
            playlist: [
                {
                    song: 0,
                    mp3: '../../assets/audio/Sorry_instrumental.mp3',
                    songPicture: 'https://abovewhispers.com/wp-content/uploads/2017/05/Couple-holding-hands.jpg',
                    artist: 'Phil Swartz',
                    title: 'Sorry',
                    selected: false
                },
                {
                    song: 1,
                    mp3: '../../assets/audio/Main_C_instrumental.p3',
                    songPicture: 'https://cdn2.lamag.com/wp-content/uploads/sites/6/2019/11/palm-trees-lean-los-angeles-daniel-schludi-t6JpiIWLLp8-unsplash-1068x712.jpg',
                    artist: 'Phil Swartz',
                    title: 'The Main One',
                    selected: false
                },
                {
                    song: 2,
                    mp3: '../../assets/audio/ZeroKBeez2_instrumental.mp3',
                    songPicture: 'https://wallpaperaccess.com/full/263999.jpg',
                    artist: 'Phil Swartz',
                    title: 'No Limits',
                    selected: false
                }
            ],
            songCounter: 0,
            songCounterBack: 2,
            songArr: [
                      'https://abovewhispers.com/wp-content/uploads/2017/05/Couple-holding-hands.jpg',
                      '../../assets/audio/Sorry_instrumental.mp3',
                      'Phil Swartz',
                      'Sorry']
        }
    }


    handlePlayControlClick = (event) => {
        event.preventDefault();
        console.log('play button clicked');

        // TypeError: Cannot read property '0' of undefined
        console.log(this.state.playlist[0].src);
    }
    handlePauseControlClick = (event) => {
        event.preventDefault();
        console.log('pause button clicked');
    }
    handleForwardControlClick = (event) => {
        event.preventDefault();
        console.log('forward clicked');
        let count = this.state.songCounter;
        let myPlaylist = this.state.playlist;
        for (let i = 0; i < myPlaylist.length; i++) {
            if (count === this.state.playlist[i].song ) {
                this.setState({
                    songArr: [
                        myPlaylist[i].songPicture,
                        myPlaylist[i].mp3,
                        myPlaylist[i].artist,
                        myPlaylist[i].title
                    ],
                    songCounter: count + 1
                })
            } else if (count >= 2) {
                this.setState({
                    songArr: [
                        myPlaylist[0].songPicture,
                        myPlaylist[0].mp3,
                        myPlaylist[0].artist,
                        myPlaylist[0].title
                    ],
                    songCounter: 0
                })
            }
        }
        // console.log(this.state.songArr);
        console.log(this.state.songCounter);
    }
    handleBackwardControlClick = (event) => {
        event.preventDefault();
        console.log('backward clicked');
        let count = this.state.songCounterBack;
        let myPlaylist = this.state.playlist;
        for (let i = 2; i >= 0; i--) {
            // console.log(i);
            if (count === this.state.playlist[i].song ) {
                this.setState({
                    songArr: [
                        myPlaylist[i].songPicture,
                        myPlaylist[i].mp3,
                        myPlaylist[i].artist,
                        myPlaylist[i].title
                    ],
                    songCounterBack: count - 1
                })
            } else if (count <= 0) {
                this.setState({
                    songArr: [
                        myPlaylist[2].songPicture,
                        myPlaylist[2].mp3,
                        myPlaylist[2].artist,
                        myPlaylist[2].title
                    ],
                    songCounterBack: 2
                })
            }
        }
        console.log(this.state.songCounterBack);

    }
    render() {
        return (
            <div>
                <Player
                    onPlayClick={this.handlePlayControlClick}
                    onPauseClick={this.handlePauseControlClick}
                    onForwardControlClick={this.handleForwardControlClick}
                    onBackwardControlClick={this.handleBackwardControlClick}
                    songPic={this.state.songArr[0]}
                    songMP3={this.state.songArr[1]}
                    songArtist={this.state.songArr[2]}
                    songTitle={this.state.songArr[3]}
                />
            </div>
        )
    };
}

export default Music;
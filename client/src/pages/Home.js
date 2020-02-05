import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HomeTopCard from '../components/HomeTopCard';
import Body from '../components/Body';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render = () => {
        return (
            <div>
                <Link 
                    to="/Home"
                    className={window.location.pathname === "/Home"}
                >
                </Link> 
                <HomeTopCard />
                <Body />

            </div>
        )
    }

}

export default Home;

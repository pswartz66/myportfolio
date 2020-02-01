import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import HomeTopCard from '../components/HomeTopCard';


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

            </div>
        )
    }

}

export default Home;

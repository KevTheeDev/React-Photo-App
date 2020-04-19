import React from 'react';
import './NavigationBar.css';
import Login from './Login.js';
import Home from './Home.js';
import UserProfile from './UserProfile.js';
import { Route, BrowserRouter as Router, Link, Switch, } from 'react-router-dom';
import Bookmarks from './Bookmarks';



class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Home />
                <Bookmarks />
                <UserProfile />
            </div>

         );
    }
}
 
export default NavigationBar;
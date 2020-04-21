import React from 'react';
import './NavigationBar.css';
import Home from './Home.js';
import UserProfile from './UserProfile.js';
import Login from './Login.js';

import { Route, BrowserRouter as Router, Link, Switch, } from 'react-router-dom';
import Bookmarks from './Bookmarks';



class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Router> 
            <div className="navList">
              <nav> 
                <ul>
                  <li>
                    Home
                  </li>
                  <li>
                    <Link to="/Bookmarks">Bookmarks </Link>
                  </li>
                  <li>
                    <Link to="/UserProfile">UserProfile</Link>
                  </li>
                  <li>
                    <Link to="/Login">Login</Link>
                  </li>
                </ul> 
              </nav>
      
            {/* <Route exact path="/NavigationBar" component={NavigationBar} /> */}
            <Route exact path="/Home" component={Home} />
            <Route exact path="/Login" component={Login} />
            </div>
          </Router>

         );
    }
}
 
export default NavigationBar;
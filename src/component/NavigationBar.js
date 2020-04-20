import React from 'react';
import './NavigationBar.css';
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
            <Router> 
            <div className="navList">
              <nav> 
                <ul>
                  <li>
                    <Link to="/Home">Home</Link>
                  </li>
                  <li>
                    <Link to="/Bookmarks">Bookmarks </Link>
                  </li>
                  <li>
                    <Link to="/UserProfile">UserProfile</Link>
                  </li>
                </ul>
              </nav>
      
              <Switch>
              </Switch>
            </div>
          </Router>

         );
    }
}
 
export default NavigationBar;
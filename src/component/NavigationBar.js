import React from 'react';
import './NavigationBar.css';
import Login from './Login.js';
import Home from './Home.js';
import UserProfile from './UserProfile.js';
import { Route, BrowserRouter as Router, Link, Switch, } from 'react-router-dom';



class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Router>
                <div>
                    <nav>
                        <ul className="navList">
                            <Link to="/Home"> <li> <a className="active"> Home </a></li></Link>

                            <li className="dropdown">
                                <a className="dropdown" > User Profile </a>
                            </li>

                            <li><a> Bookmark and Saved Images </a></li>
                        </ul>
                    </nav>   
                    <Switch>
                        <Route exact path="/Home" component={Home} />
                    </Switch>
                </div> 
            </Router> 

         );
    }
}
 
export default NavigationBar;
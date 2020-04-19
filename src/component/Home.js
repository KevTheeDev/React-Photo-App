import React from 'react';
import './NavigationBar.js'
import './NavigationBar.css'
import { Route, BrowserRouter as Router, Link, Switch, } from 'react-router-dom';

function Home(){
    return(
        <div>
            {/* <h3> Home Page </h3> */}
            <Router>
                <div>
                    <nav>
                        <ul className="navList">
                            <Link to="/Home"> <li> <a className="active"> Home </a></li></Link>
                        </ul>
                    </nav>   
                    <Switch>
                        <Route exact path="/Home" component={Home} />
                    </Switch>
                </div> 
            </Router> 

        </div>
    )
}
 
export default Home;
 
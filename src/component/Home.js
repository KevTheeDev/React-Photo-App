import React from 'react';
import { BrowserRouter as Router, Link, } from 'react-router-dom';

function Home(){
    return(
        <React.Fragment>
            <h3> Home Page </h3>
            <Router>
                <nav> 
                <ul>
                    <li>
                    <Link to="/Home">Home</Link>
                    </li>
                </ul>
                </nav >
            </Router >
        </React.Fragment>
    )
}
 
export default Home;
 
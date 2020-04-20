import React from 'react';
import './NavigationBar.js'
import './NavigationBar.css'
import { Route, BrowserRouter as Router, Link, Switch, } from 'react-router-dom';

function Home(){
    return(
        <React.Fragment>
            <h1> Welcome to the home page </h1>
        </React.Fragment>
    )
}
 
export default Home;
 
import React from 'react';
import home_redandblue_bkcgrnd from '../images/home_redandblue_bkcgrnd.jpg'
import './Home.css'
import { Route, BrowserRouter as Router, Link, Switch, } from 'react-router-dom';

function Home(){
    return(
        <div>
            <h1 className="hmpg"> Home Page  </h1>
            <div>
                <img src={ home_redandblue_bkcgrnd } className="home_background" alt="bluered" />
            </div>
        </div>
    )
}
 
export default Home;
 
import React from 'react';
import home_redandblue_bkcgrnd from '../images/home_redandblue_bkcgrnd.jpg'
import './Home.css'
import { Route, BrowserRouter as Router, Link, Switch, } from 'react-router-dom';

class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            imageContainerArr: [

            ],
        }
    }


    render(){
        let image = this.state.imageContainerArr;
        const imagesMap = image.map;
    return(
        <div>
            <h1 className="hmpg"> Home Page  </h1>
                <div>
                    <img src={ home_redandblue_bkcgrnd } className="home-background" alt="blue-red" />
                    <div className="image-container" >

                    </div>
                </div>
        </div>
        )
    }
}

 
export default Home;
 
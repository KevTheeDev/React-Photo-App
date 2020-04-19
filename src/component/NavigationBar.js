import React from 'react';
import './NavigationBar.css';



class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <ul className="navList">
                    <li><a className="active"> Home </a></li>

                    <li className="dropdown">
                        <a className="dropdown" > User Profile </a>
                    </li>

                    <li><a> Bookmark and Saved Images </a></li>
                </ul>
            </div>
         );
    }
}
 
export default NavigationBar;
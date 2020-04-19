import React from 'react';
import NavigationBar from './component/NavigationBar.css';
import Login from './component/Login.js';
import Home from './component/Home.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 

     };
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

        <Login />
        <Home />
    </div>
    );
  }
}
 
export default App;
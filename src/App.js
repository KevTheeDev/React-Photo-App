import React from 'react';
// @ts-ignore
import NavigationBar from './component/NavigationBar.css';
import Login from './component/Login.js';

 
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
    </div>
    );
  }
}

export default App;
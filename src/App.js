import React from 'react';
// @ts-ignore
import NavigationBar from './component/NavigationBar.css';
import Login from './component/Login.js';
import Home from './component/Home.js';
import Bookmarks from './component/Bookmarks.js';
import UserProfile from './component/UserProfile.js';
 
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
        <UserProfile />
        <Bookmarks />
    </div>
    );
  }
}
 
export default App;
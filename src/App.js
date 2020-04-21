import React from 'react';
import NavigationBar from './component/NavigationBar.js';
import Login from './component/Login.js';
import Home from './component/Home.js';
import UserProfile from './component/UserProfile.js';
import Bookmarks from './component/Bookmarks.js';
import { Route, BrowserRouter as Router, Link, Switch, } from 'react-router-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 

     };
  }
  render() {
    return (
      //evrything btwn the router will use teh routing ability
      <Router>
        <div className="App">  
          <NavigationBar />
          <Route exact path="/" component={Home} /> 

        </div>
      </Router>

    );
  }
}
   
export default App;
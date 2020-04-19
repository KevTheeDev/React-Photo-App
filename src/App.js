import React from 'react';
import NavigationBar from './component/NavigationBar.js';
import Login from './component/Login.js';
import Home from './component/Home.js';
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
        <NavigationBar />
        <Login />
        <Home />
        <UserProfile />
    </div>
    );
  }
}
 
export default App;
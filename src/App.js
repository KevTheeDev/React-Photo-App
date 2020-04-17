import React from 'react';
import style from './component/style.css'
import Login from './component/Login.js';

 
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: '',
      password: '',
     };
  }
  render() {
    return (
      <div>
        <ul>
            <li><a className="active">Home </a></li>

            <li className="dropdown">
                <a className="dropdown" >About </a>
            </li>

            <li><a>Next</a></li>
        </ul>

        <Login />
    </div>
    );
  }
}

export default App;
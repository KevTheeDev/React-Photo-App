import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 

     };
  }
  render() {
    return (
      <div>
        <ul>
            <li><a href="#" className="active">Home </a></li>

            <li className="dropdown">
                <a className="dropdown" href="#">About </a>
            </li>

            <li><a href="#">Next</a></li>
        </ul>
    </div>
    );
  }
}

export default App;
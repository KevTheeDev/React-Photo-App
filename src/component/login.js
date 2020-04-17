import React from 'react';
import './Login.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            password: '',
         };
         // bind .this to control for the component onInput
         this.onInput = this.onInput.bind(this);
    }

    // (e.target.name, e.target.value);
    // I think this updates the states in the console
    onInput(e) {
        this.setState({ [e.target.name]: e.target.value })
      }
 
      // lets us see the values of whats submitted
      // clear after obsubmit use -> this.setState( add empty key value pairs)
      // this.props.onSubmit(this.state) --> shows user input in concole
    onSubmit(e){
        this.props.onSubmit(this.state)
        this.setState({
          username: '',
          password: '',
        })
      }   

    render(){
        return (
          <div className="reactapp">
            
           <h1 className="title" > Photo Media App </h1>
      
            {/* used onchange to call the function that will catch the event that updates the state when text is entered in the input boxes */}
            <form onChange={this.onInput} >         
              <div>
                <label>Username</label>
                <input type='text' name="username" placeholder="email or username"/>
              </div>
      
              <div>
                <label>Password</label>
                {/* 3. type passwrod hides the word you enter */}
                <input type='password' name="password" placeholder="password"/>
              </div>
            </form>
      
          {/* added onClick calls this.onInput */}
          {/* the page doesn't auto refresh so I don't pass an event */}
          <button className='btn' onClick={() => this.onSubmit()}> {this.onSubmit} Login</button>
      
         </div>
        );
      }
    }

export default Login; 
import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            password: '',
         };
    }
    render(){
        return (
          <div className="reactapp">
            
           <h1 className="title" >REACT BASE SIGN UP FORM</h1>
      
            {/* used onchange to call the function that will catch the event that updates the state when text is entered in the input boxes */}
            <form onChange={this.onInput} >         
              <div>
                <label>Username</label>
                <input type='text' name="username" />
              </div>
      
              <div>
                <label>Password</label>
                {/* 3. type passwrod hides the word you enter */}
                <input type='password' name="password" />
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
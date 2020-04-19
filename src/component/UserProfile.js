import React from 'react';
import { Route, BrowserRouter as Router, Link, Switch, } from 'react-router-dom';


function UserProfile(){
    return(
        <React.Fragment>
            <Router>
            {/* <h3> User Profile </h3> */}
            <div>
                    <nav>
                        <ul className="navList">
                            <Link to="/UserProfile"> <li> <a className="active"> UserProfile </a></li></Link>
                        </ul>
                    </nav>   
                    <Switch>
                        <Route exact path="/UserProfile" component={UserProfile} />
                    </Switch>
                </div> 
            </Router> 

        </React.Fragment>
    )
}

export default UserProfile;

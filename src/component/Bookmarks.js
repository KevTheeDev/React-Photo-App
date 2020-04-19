import React from 'react';
import { Route, BrowserRouter as Router, Link, Switch, } from 'react-router-dom';

function Bookmarks(){
    return(
        <React.Fragment>
            {/* <h3> Bookmarks </h3> */}
                        <Router>
                <div>
                    <nav>
                        <ul className="navList">
                            <Link to="/Bookmarks"> <li> <a className="active"> Bookmarks </a></li></Link>
                        </ul>
                    </nav>   
                    <Switch>
                        <Route exact path="/Bookmarks" component={Bookmarks} />
                    </Switch>
                </div> 
            </Router> 
        </React.Fragment>
    )
}

export default Bookmarks;
 
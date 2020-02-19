import React, {Component} from 'react';
import {withRouter, Route, Switch, BrowserRouter as Router, Redirect} from 'react-router-dom';

import routes from './routes';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        return (
            <React.Fragment>
                <Router>
                    <Switch>
                        {routes.map((route, idx) =>
                            <Route path={route.path} component={route.component} key={idx}/>
                        )}
                        <Redirect to="/upload"/>
                    </Switch>
                </Router>
            </React.Fragment>
        );
    }
}


export default withRouter(App);



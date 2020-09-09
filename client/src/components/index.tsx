import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home/Index';
import Login from './Login/index';
import Signup from './Signup/index';

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/login" component={Login} exact />
                <Route path="/signup" component={Signup} exact />
            </Switch>
        </Router>
    )
};
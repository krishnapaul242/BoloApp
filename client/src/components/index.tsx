import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home/Index';

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/login" component={Home} exact />
                <Route path="/signup" component={Home} exact />
            </Switch>
        </Router>
    )
};
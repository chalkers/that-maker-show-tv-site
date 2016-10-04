import React from 'react';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';
import App from './App';
import Home from './Home';
import Episode from './Episode';

const routes = (
    <Router history={browserHistory}>
        <Route component={App}>
            <Route path="/" component={Home} />
            <Route path="episode/:slug" component={Episode} />
        </Route>
    </Router>
);

export default routes;


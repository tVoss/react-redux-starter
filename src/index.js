import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history'

import reducers from './reducers'

import App from './components/app'

// The global state for the application
const store = createStore(
    // Reducers to handle actions
    reducers,
    compose(
        // Middleware to modify actions
        applyMiddleware(

        )
    )
);

// How to keep track of user navigation
// This uses simple browser url paths
const history = createBrowserHistory();
 
ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route component={App} />
            </Switch>
        </Router>
    </Provider>
, document.getElementById('app'));
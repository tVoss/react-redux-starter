import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { OidcProvider } from 'redux-oidc';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import reducers from './reducers'

import App from './components/app'
import Callback from './components/callback'

import { userManager } from './core/auth'

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
        <OidcProvider store={store} userManager={userManager} >
            <Router history={history}>
                <Switch>
                    <Route path="/callback" component={Callback} />
                    <Route component={App} />
                </Switch>
            </Router>
        </OidcProvider>
    </Provider>
, document.getElementById('app'));
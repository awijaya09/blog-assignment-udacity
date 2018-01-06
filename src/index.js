import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReduxPromise from 'redux-promise';

import reducers from './reducers';
import HeaderMenu from './components/HeaderMenu';
import BlogList from './containers/blog-list';
import PostNew from './components/PostNew';

import './styles/style.css';
import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <HeaderMenu />
                <div className="container">
                    <Switch>
                        <Route path="/post/new" component={PostNew} />
                        <Route path="/" component={BlogList} />
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();

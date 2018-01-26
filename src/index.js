import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReduxPromise from 'redux-promise';

import reducers from './reducers';
import HeaderMenu from './components/HeaderMenu';
import BlogList from './containers/blog-list';
import PostNew from './components/PostNew';
import PostSingle from './containers/PostSingle';
import PostEdit from './containers/PostEdit';
import CommentEidt from './containers/CommentEdit';

import './styles/style.css';
import registerServiceWorker from './registerServiceWorker';
import CommentEdit from './containers/CommentEdit';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <HeaderMenu />
                <div className="container">
                    <Switch>
                        <Route path="/posts/new" component={PostNew} />
                        <Route path="/comments/:id" component={CommentEdit} />
                        <Route path="/:category/:id/edit" component={PostEdit} />
                        <Route path="/:category/:id" component={PostSingle} />
                        <Route path="/:category" component={BlogList} />
                        <Route path="/" component={BlogList} />
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();

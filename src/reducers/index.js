import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PostsReducer from './reducer_posts';

const RootReducer = combineReducers({
    posts: PostsReducer,
    form: formReducer
});

export default RootReducer;
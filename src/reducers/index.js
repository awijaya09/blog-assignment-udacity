import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';

const RootReducer = combineReducers({
    posts: PostsReducer
});

export default RootReducer;
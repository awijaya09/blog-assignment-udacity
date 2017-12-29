import { FETCH_BLOG_POSTS } from '../actions/index';

export default function(state = [], action) {
    switch(action.type) {
    case FETCH_BLOG_POSTS:
        console.log(action.payload.data);
        return action.payload.data;
    default:
        return state;
    }
}
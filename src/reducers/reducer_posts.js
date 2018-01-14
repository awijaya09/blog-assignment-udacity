import { FETCH_BLOG_POSTS } from '../actions/index';
import _ from 'lodash';

export default function(state = {}, action) {
    switch(action.type) {
    case FETCH_BLOG_POSTS:
        return _.mapKeys(action.payload.data, 'id');
    default:
        return state;
    }
}
import { FETCH_BLOG_POSTS, FETCH_SINGLE_POST, FETCH_CATEGORY_POSTS} from '../actions/index';
import _ from 'lodash';

export default function(state = {}, action) {
    switch(action.type) {
    case FETCH_CATEGORY_POSTS:
        return _.mapKeys(action.payload.data, 'category');;
    case FETCH_SINGLE_POST:
        return { ...state , [action.payload.data.id]: action.payload.data };
    case FETCH_BLOG_POSTS:
        return _.mapKeys(action.payload.data, 'id');
    default:
        return state;
    }
}
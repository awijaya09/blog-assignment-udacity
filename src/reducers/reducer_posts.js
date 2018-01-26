import { FETCH_BLOG_POSTS, FETCH_SINGLE_POST, UPDATE_POST_VOTE, DELETE_SINGLE_POST, EDIT_SINGLE_POST} from '../actions/index';
import _ from 'lodash';

export default function(state = {}, action) {
    switch(action.type) {
    case EDIT_SINGLE_POST:
        return { ...state , [action.payload.data.id]: action.payload.data };
    case DELETE_SINGLE_POST:
        return {
            ...state,
            [action.payload.data.id]: {
                ...action.payload.data, deleted:true
            }
        };
    case UPDATE_POST_VOTE:
        const newScore = action.payload.data.voteScore;
        return { 
            ...state,
            [action.payload.data.id]: {
                ...action.payload.data, voteScore: newScore
            }
        };
    case FETCH_SINGLE_POST:
        return { ...state , [action.payload.data.id]: action.payload.data };
    case FETCH_BLOG_POSTS:
        return _.mapKeys(action.payload.data, 'id');
    default:
        return state;
    }
}
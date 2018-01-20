import { FETCH_BLOG_POSTS, FETCH_SINGLE_POST, UPDATE_POST_VOTE} from '../actions/index';
import _ from 'lodash';

export default function(state = {}, action) {
    switch(action.type) {
    case UPDATE_POST_VOTE:
        const newScore = action.payload.data.voteScore;
        console.log("new score is : " + newScore);
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
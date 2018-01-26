import { FETCH_POST_COMMENTS, DELETE_SINGLE_COMMENT, UPDATE_COMMENT_VOTE, EDIT_SINGLE_COMMENT, FETCH_SINGLE_COMMENT} from '../actions/actionTypes';
import _ from 'lodash';

export default function(state = {}, action) {
    switch(action.type) {
    case FETCH_SINGLE_COMMENT:
        return { ...state , [action.payload.data.id]: action.payload.data }; 
    case EDIT_SINGLE_COMMENT:
        return {...state, [action.payload.data.id]: action.payload.data};
    case UPDATE_COMMENT_VOTE:
        const newScore = action.payload.data.voteScore;
        return { 
            ...state,
            [action.payload.data.id]: {
                ...action.payload.data, voteScore: newScore
            }
        };
    case DELETE_SINGLE_COMMENT:
        return {
            ...state,
            [action.payload.data.id]: {
                ...action.payload.data, deleted:true
            }
        };
    case FETCH_POST_COMMENTS:
        return _.mapKeys(action.payload.data, 'id');
    default:
        return state;
    }
}
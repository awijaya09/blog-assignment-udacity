import { FETCH_POST_COMMENTS, DELETE_SINGLE_COMMENT } from '../actions/index';
import _ from 'lodash';

export default function(state = {}, action) {
    switch(action.type) {
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
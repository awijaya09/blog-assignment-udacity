import { FETCH_POST_COMMENTS } from '../actions/index';
import _ from 'lodash';

export default function(state = {}, action) {
    switch(action.type) {
    case FETCH_POST_COMMENTS:
        return _.mapKeys(action.payload.data, 'id');
    default:
        return state;
    }
}
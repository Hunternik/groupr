import { FETCH_USER, UPDATE_USER_EVENT } from '../actions/types';

export default function(state = null, action) {
    switch (action.type) {
        case FETCH_USER:
						return action.payload || false;
				case UPDATE_USER_EVENT: 
						return action.payload.user;
        default: 
            return state
    }
}
import { SCROLL } from '../actions/types';

export default (state = null, action) => {
	switch (action.type) {
		case SCROLL:
			return action.payload;
		default:
			return state;
	}
};
import axios from 'axios'; 
import { FETCH_USER } from './types';

export const handleToken = token => 
	async dispatch => {
		const res = await axios.post('/auth/stripe', token);
		dispatch({ type: FETCH_USER, payload: res.data });
};


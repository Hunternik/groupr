import axios from 'axios'; 
import { FETCH_USER } from './types';

export const submitProfile = data => 
	async dispatch => {
		const res = await axios.post('/api/profile', data);
		
		dispatch({ type: FETCH_USER, payload: res.data });
};


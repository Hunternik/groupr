import axios from 'axios'; 
import { SUBMIT_PROFILE } from './types';

export const submitProfile = data => 
	async dispatch => {
		const res = await axios.post('/api/profile', data);
		
		dispatch({ type: SUBMIT_PROFILE, payload: res.data });
};


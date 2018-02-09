import axios from 'axios';
import { FETCH_TOTP, FETCH_OTP } from './types';

export const fetchTotp = () => async dispatch => {
	console.log("Inside actions");
	const res = await axios.get('/auth/totpsetup')
	// console.log("get axios - res", res);
	// console.log("get axios - res.data", res.data);
	dispatch({ type: FETCH_TOTP, payload: res.data });
};

export const fetchOtp = (data) => async dispatch => {
	const res = await axios.post('/auth/login-otp', data)
	dispatch({ type: FETCH_OTP, payload: res.data });
};

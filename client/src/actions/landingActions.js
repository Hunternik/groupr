import { SCROLL } from './types';

export const scroll = (data) => (
	{
		type: SCROLL,
		payload: data
	}
);
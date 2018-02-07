import { FETCH_COMPANIES } from '../actions/types';

const INITIAL_STATE = {
  _id: null,
  companyId: null,
  name: null,
  industry: null,
  website: null,
  jobsOpen: null,
  primaryContact: null,
  imgLogoURL: null,
  employees: null,
  activeEvents: null,
  pastEvents: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_COMPANIES:
      console.log('FETCH_COMPANIES fired with payload', action.payload);
      return {...state, arrayOfCompanies: action.payload};
    default:
      return state;
  }
};

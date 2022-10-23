import { combineReducers } from 'redux';

import auth from './auth';

import location from './location';

import appartments from './appartments';

import profile from './profile';

const rootReducer = combineReducers({ auth, location, appartments, profile });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

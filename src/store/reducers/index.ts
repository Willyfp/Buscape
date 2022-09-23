import { combineReducers } from 'redux';

import auth from './auth';

import location from './location';

import appartments from './appartments';

const rootReducer = combineReducers({ auth, location, appartments });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

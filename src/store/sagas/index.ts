import { all, fork } from 'redux-saga/effects';

import authSagas from './auth';
import locationSagas from './location';

function* rootSagas() {
  yield all([fork(authSagas), fork(locationSagas)]);
}

export default rootSagas;

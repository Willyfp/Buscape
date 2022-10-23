import { all, fork } from 'redux-saga/effects';
import watchEditProfile from './watchEditProfile';

function* profileSagas() {
  yield all([fork(watchEditProfile)]);
}

export default profileSagas;

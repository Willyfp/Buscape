import { all, fork } from 'redux-saga/effects';

import watchRegister from './watchRegister';

import watchLogin from './watchLogin';
import watchLoadUser from './watchLoadUser';

function* authSagas() {
  yield all([fork(watchRegister), fork(watchLogin), fork(watchLoadUser)]);
}

export default authSagas;

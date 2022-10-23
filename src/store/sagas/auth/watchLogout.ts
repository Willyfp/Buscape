import { takeLatest } from 'redux-saga/effects';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { LoginTypes } from '../../reducers/auth';

function* logout() {
  try {
    yield AsyncStorage.removeItem('user');
  } catch (error) {}
}

export default function* watch() {
  yield takeLatest(LoginTypes.LOGOUT, logout);
}

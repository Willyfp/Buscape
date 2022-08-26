import { Action } from 'redux';
import { put, takeLatest } from 'redux-saga/effects';

import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { FieldValuesLogin } from '../../../types/FieldValues';
import { LoginCreators, LoginTypes } from '../../reducers/auth';
import { Alert } from 'react-native';

type LoginActionType = Action & {
  data: FieldValuesLogin;
};

function* loginRequest({ data }: LoginActionType) {
  try {
    const user: FirebaseAuthTypes.User =
      yield auth().signInWithEmailAndPassword(data.email, data.password);

    const userDoc: FirebaseFirestoreTypes.DocumentData = yield firestore()
      .collection('users')
      .doc(user.uid)
      .get();

    const formattedUser = {
      id: user.uid,
      email: user.email || '',
      name: userDoc.name,
    };

    yield AsyncStorage.setItem('user', JSON.stringify(data));

    yield put(LoginCreators.loginSuccess(formattedUser));
  } catch (error) {
    Alert.alert(error.message);
    yield put(LoginCreators.loginFailed());
  }
}

export default function* watch() {
  yield takeLatest(LoginTypes.LOGIN_REQUEST, loginRequest);
}

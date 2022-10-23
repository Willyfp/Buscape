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
      .doc(user.user.uid)
      .get();

    const realUser = userDoc.data();

    const formattedUser = {
      id: user.user.uid,
      ...realUser,
    };

    yield AsyncStorage.setItem('user', JSON.stringify(data));

    yield put(LoginCreators.loginSuccess(formattedUser));
  } catch (error) {
    Alert.alert('Usuário ou senha inválidos!');
    yield put(LoginCreators.loginFailed());
  }
}

export default function* watch() {
  yield takeLatest(LoginTypes.LOGIN_REQUEST, loginRequest);
}

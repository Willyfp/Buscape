import { Action } from 'redux';
import { put, takeLatest } from 'redux-saga/effects';
import { Alert } from 'react-native';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
import { FieldValuesRegister } from '../../../types/FieldValues';
import {
  LoginCreators,
  RegisterCreators,
  RegisterTypes,
} from '../../reducers/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

type RegisterActionType = Action & {
  data: FieldValuesRegister;
};

function* registerRequest({ data }: RegisterActionType) {
  try {
    const credential: FirebaseAuthTypes.UserCredential =
      yield auth().createUserWithEmailAndPassword(data.email, data.password);

    const doc: FirebaseFirestoreTypes.DocumentReference = yield firestore()
      .collection('users')
      .doc(String(credential.user.uid));

    const res = doc.set({ ...data, id: credential.user.uid });

    const formattedUser = {
      id: credential.user.uid,
      ...data,
    };

    yield AsyncStorage.setItem(
      'user',
      JSON.stringify({ email: data.email, password: data.password }),
    );

    yield put(LoginCreators.loginSuccess(formattedUser));
  } catch (error) {
    if ((error as any).code === 'auth/email-already-in-use') {
      Alert.alert('Esse email já foi utilizado!');
    }

    if ((error as any).code === 'auth/invalid-email') {
      Alert.alert('Email inválido!');
    }
    yield put(RegisterCreators.registerFailed());
  }
}

export default function* watch() {
  yield takeLatest(RegisterTypes.REGISTER_REQUEST, registerRequest);
}

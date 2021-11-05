import { takeLatest } from 'redux-saga/effects';
import { GET_USERS, DELETE_USER } from '../actions/type';
import { handleGetUser, handleDeleteuser } from './handler/user';

export function* watcherSaga(){
    yield takeLatest(GET_USERS, handleGetUser);
    yield takeLatest(DELETE_USER, handleDeleteuser);
}
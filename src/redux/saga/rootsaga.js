import { takeLatest } from 'redux-saga/effects';
import { SET_USER } from '../actions/type';
import { handleGetUser } from './handler/user';

export function* watcherSaga(){
    yield takeLatest(SET_USER, handleGetUser)
}
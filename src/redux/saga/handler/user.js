import { call, put } from "@redux-saga/core/effects";
import { getUser ,setUser, deleteUser } from "../../actions";
import { requestGetUser } from "../request/user";
import axios from "axios";

export function* handleGetUser(action){
    try{
        const response = yield call(axios.get, ['https://jsonplaceholder.typicode.com/users'])
        const { data } = response;
        yield put(setUser(data))
    } catch (error){
        console.log(error)
    }
}

export function *handleDeleteuser(action){
    yield put(deleteUser(action))
}


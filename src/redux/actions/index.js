import {
    GET_USER,
    SET_USER
} from './type'

export const getUser = () => ({
    type: GET_USER
});

export const setUser = (users) => ({
    type: SET_USER,
    payload: users
});
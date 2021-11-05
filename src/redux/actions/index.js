import {
    GET_USERS,
    SET_USER,
    DELETE_USER
} from './type'

export const getUser = () => ({
    type: GET_USERS,
});

export const setUser = (users) => ({
    type: SET_USER,
    payload: users
});

export const deleteUser = (id) => ({
    type: DELETE_USER,
    payload: id
});
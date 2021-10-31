import {
    GET_USER,
    SET_USER
} from '../actions/type'

const initialState = {
    user: undefined
};

export default (state = initialState, action) => {
    switch(action.type){
        case SET_USER:
            return {
                ...state, user: action.payload
            }
            default:{
                return state
            }
    }
}
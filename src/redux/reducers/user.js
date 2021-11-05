import _ from 'lodash'
import {
    GET_USERS,
    SET_USER,
    DELETE_USER
} from '../actions/type'

// const initialState = {
//     user: undefined
// };

const userReducer =  (state = {}, action) => {
    switch(action.type){
        case SET_USER:
            return { ...state, ...action.payload }

        // case SET_USER:
        //     return {
        //         ...state, user: action.payload
        //     };

        case DELETE_USER:
            if(state.user){
                return{ 
                    ...state, 
                    user: state.user.filter(user => user.id !== action.payload)
                };
            }else{
                return state
            }

        default:{
            return state
        }
    }
}

export default userReducer
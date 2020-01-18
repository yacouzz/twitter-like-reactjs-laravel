import userTypesActions from './user.types';
import {deleteCurrentUser} from './user.utils'
const INITIAL_STATE={
    currentUser: {
        token: null,
        user: null

    }
}

const userReducer =(state= INITIAL_STATE, action)=>{
    switch(action.type){
        case userTypesActions.SET_CURRENT_USER : return {
            ...state,
            currentUser: action.payload
        }
        case userTypesActions.DELETE_CURRENT_USER: return {
            ...state,
<<<<<<< HEAD
            currentUser:deleteCurrentUser(state.currentUser,action.payload)
=======
            currentUser:deleteCurrentUser(action.payload)
>>>>>>> a9560e3643c93e50be06d5b13b07d4f82cb67cd1
        }
        default: return state;
    }
}

export default userReducer;

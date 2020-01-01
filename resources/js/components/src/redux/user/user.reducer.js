import userTypesActions from './user.types';

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
        default: return state;
    }
}

export default userReducer;

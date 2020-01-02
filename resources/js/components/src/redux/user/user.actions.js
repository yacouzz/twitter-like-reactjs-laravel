import userTypesActions from './user.types';


export const setCurrentUser= user =>({
    type: userTypesActions.SET_CURRENT_USER,
    payload: user
})


export const deleteUser = user =>({
    type:userTypesActions.DELETE_CURRENT_USER,
    payload:user
})

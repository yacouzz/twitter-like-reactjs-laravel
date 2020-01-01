import { combineReducers } from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './user/user.reducer'


const persistConfig={
    key:'example',
    storage,
    whitelist:['user']
}

//anciennement export default combineReducers
const rootReducer= combineReducers({
    user: userReducer
})

export default persistReducer(persistConfig, rootReducer);

import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';
import { persistStore } from 'redux-persist';


//const sagaMiddleware = createSagaMiddleware();

const middlewares = [logger];

/*if(process.env.NODE_ENV==='development'){
    middlewares.push(logger);
}*/

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

//sagaMiddleware.run()

//export const persist= persistStore(store);
export const persist= persistStore(store);

export default store;

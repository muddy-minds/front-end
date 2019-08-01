import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import roomReducer from './reducers/roomReducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['room']
};

const rootReducer = combineReducers({
    roomReducer
});

export default persistReducer(persistConfig, rootReducer);

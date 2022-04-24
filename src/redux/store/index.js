import thunk from 'redux-thunk';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import reducer from '../reducers';

// const rootReducer = combineReducers({
//   reducer,
// });

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const configPersist = persistReducer(persistConfig, reducer);

export const Store = createStore(configPersist, applyMiddleware(thunk));
export const PersistStore = persistStore(Store);

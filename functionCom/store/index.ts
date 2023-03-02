import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createWrapper } from 'next-redux-wrapper';
import rootReducer from '../reducer/rootReducer';
import storage from 'redux-persist/lib/storage';

import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};
const rootReducerState = combineReducers({ auth: rootReducer });
const persistedReducer = persistReducer(persistConfig, rootReducerState);

// middleware
const middleware = [thunk];

// creating store
const store = createStore(persistedReducer, applyMiddleware(...middleware));
const persistor = persistStore(store);
export { store, persistor };
// assigning store to next wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);

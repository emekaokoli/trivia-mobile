// import { createForms } from 'react-redux-form'
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';
import createSecureStore from 'redux-persist-expo-securestore';
//import storage from 'redux-persist/es/storage';
import thunkMiddleware from 'redux-thunk';
import  questions  from './quiz.redux.slice';

const storage = createSecureStore();

const config = {
  key: 'root',
  storage: storage,
  debug: true,
};

export default function configureStore() {
  const rootReducer = persistReducer(config, questions);
  const middlewares = [thunkMiddleware, logger];
  const middlewareEnhancer = composeWithDevTools(
    applyMiddleware(...middlewares),
  );

  const store = createStore(rootReducer, middlewareEnhancer);
  const persistor = persistStore(store);

  return { store, persistor };
}

import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import  reducer from './reducers/index'
import { watcherSaga } from "./saga/rootsaga";

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, {}, composeEnhancers(applyMiddleware(...middleware)));

sagaMiddleware.run(watcherSaga)

export default store;
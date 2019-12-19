import { applyMiddleware, createStore } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import { createEpicMiddleware } from 'redux-observable';
import { history } from './history';
import rootReducer from '../reducers';
import rootSaga from '../sagas';
import { rootEpic } from '../epics';

const epicMiddleware = createEpicMiddleware();
const sagaMiddleware = createSagaMiddleware();

const myRouterMiddleware = routerMiddleware(history);
const getMiddleware = () => applyMiddleware(myRouterMiddleware, sagaMiddleware, epicMiddleware);

const store = createStore(rootReducer, getMiddleware());

sagaMiddleware.run(rootSaga);
epicMiddleware.run(rootEpic);

export { store };

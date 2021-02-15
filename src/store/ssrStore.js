import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createEpicMiddleware } from 'redux-observable';
import rootTestReducer from '../reducers';
import rootSaga from '../sagas';
import { rootEpic } from '../epics';

const epicMiddleware = createEpicMiddleware();
const sagaMiddleware = createSagaMiddleware();

const getMiddleware = () => applyMiddleware(sagaMiddleware, epicMiddleware);
const store = createStore(rootTestReducer, getMiddleware());

sagaMiddleware.run(rootSaga);
epicMiddleware.run(rootEpic);

export default store;

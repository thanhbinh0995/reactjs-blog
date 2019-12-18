import { combineEpics } from 'redux-observable';
import { fetchWhiskiesEpic } from './whisky';
import { loadArticlesEpic } from './article';

export const rootEpic = combineEpics(fetchWhiskiesEpic, loadArticlesEpic);

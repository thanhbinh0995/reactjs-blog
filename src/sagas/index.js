import { all } from 'redux-saga/effects';
import { watchLoadArticles, watchGetArticle } from './article';

export default function* rootSaga() {
    yield all([watchGetArticle()]);
}

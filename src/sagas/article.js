import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { call, put, takeEvery } from 'redux-saga/effects';
import { ARTICLE_TYPES } from '../types';
import { ArticleAPI } from '../services';

function* onLoadArticles(action) {
    try {
        yield put(showLoading());
        const response = yield call(() => ArticleAPI.getAll());
        const payload = response.data.articles;
        yield put({ type: ARTICLE_TYPES.LOAD_ARTICLES_SUCCESS, payload });
    } catch (error) {
        yield put({ type: ARTICLE_TYPES.LOAD_ARTICLES_ERROR, error });
    } finally {
        yield put(hideLoading());
    }
}

function* watchLoadArticles() {
    yield takeEvery(ARTICLE_TYPES.LOAD_ARTICLES, onLoadArticles);
}

function* onGetArticle(action) {
    try {
        yield put(showLoading());
        const { slug } = action.payload.data;
        const response = yield call(() => ArticleAPI.get(slug));
        const payload = response.data.article;
        yield put({ type: ARTICLE_TYPES.GET_ARTICLE_SUCCESS, payload });
    } catch (error) {
        yield put({ type: ARTICLE_TYPES.GET_ARTICLE_ERROR, error });
    } finally {
        yield put(hideLoading());
    }
}

function* watchGetArticle() {
    yield takeEvery(ARTICLE_TYPES.GET_ARTICLE, onGetArticle);
}

export { watchLoadArticles, watchGetArticle };

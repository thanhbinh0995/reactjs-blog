import axios from 'axios';
import { API_ROOT, NUMBER_RECORD_LIMIT } from '../constants';
import { ARTICLE_TYPES } from '../types';

export function loadArticles() {
    function requestLoadArticles() {
        return { type: ARTICLE_TYPES.LOAD_ARTICLES };
    }

    function loadArticlesSuccess(articles) {
        return {
            type: ARTICLE_TYPES.LOAD_ARTICLES_SUCCESS,
            payload: articles,
        };
    }

    function loadArticlesError(error) {
        return {
            type: ARTICLE_TYPES.LOAD_ARTICLES_ERROR,
            payload: error,
        };
    }
    return dispatch => {
        dispatch(requestLoadArticles());
        const url = `${API_ROOT}/articles?limit=${NUMBER_RECORD_LIMIT}`;
        return axios
            .get(url)
            .then(request => {
                dispatch(loadArticlesSuccess(request.data.articles));
            })
            .catch(error => {
                dispatch(loadArticlesError(error));
            });
    };
}

export function getArticle(slug) {
    function getArticleSuccess(article) {
        return {
            type: ARTICLE_TYPES.GET_ARTICLE_SUCCESS,
            payload: article,
        };
    }

    function getArticleError(error) {
        return {
            type: ARTICLE_TYPES.GET_ARTICLE_ERROR,
            payload: error,
        };
    }

    return dispatch => {
        const url = `${API_ROOT}/articles/${slug}`;
        return axios
            .get(url)
            .then(request => {
                dispatch(getArticleSuccess(request.data.article));
            })
            .catch(error => {
                dispatch(getArticleError(error));
            });
    };
}

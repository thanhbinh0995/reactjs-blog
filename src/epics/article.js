import { ARTICLE_TYPES } from '../types';
import { ArticleAPI } from '../services';

function loadArticlesEpic(action$) {
    return action$
        .ofType(ARTICLE_TYPES.LOAD_ARTICLES)
        .switchMap(() => ArticleAPI.getAll().then(res => res.data.articles))
        .map(data => ({
            type: ARTICLE_TYPES.LOAD_ARTICLES_SUCCESS,
            payload: data,
        }))
        .catch(error => ({
            type: ARTICLE_TYPES.LOAD_ARTICLES_ERROR,
            payload: { error },
        }));
}

export { loadArticlesEpic };

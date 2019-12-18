import { ARTICLE_TYPES } from '../types';

export function loadArticles() {
    return {
        type: ARTICLE_TYPES.LOAD_ARTICLES,
    };
}

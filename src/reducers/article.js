import { ARTICLE_TYPES } from '../types';

export default function articleReducer(state = {}, action) {
    switch (action.type) {
        case ARTICLE_TYPES.LOAD_ARTICLES:
            return { ...state, articles: [], inProgress: true };
        case ARTICLE_TYPES.LOAD_ARTICLES_SUCCESS:
            return { ...state, articles: action.payload, inProgress: false };
        case ARTICLE_TYPES.LOAD_ARTICLES_ERROR:
            return { ...state, errors: action.payload };
        case ARTICLE_TYPES.CREATE_ARTICLE_SUCCESS:
            return { ...state, article: action.payload };
        case ARTICLE_TYPES.CREATE_ARTICLES_ERROR:
            return { ...state, article: action.payload };
        case ARTICLE_TYPES.GET_ARTICLE_SUCCESS:
            return { ...state, article: action.payload };
        case ARTICLE_TYPES.GET_ARTICLE_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
}

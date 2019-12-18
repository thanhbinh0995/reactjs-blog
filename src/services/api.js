import axios from 'axios';
import { API_ROOT, NUMBER_RECORD_LIMIT } from '../constants';

const ArticleAPI = {
    getAll: () => axios.get(`${API_ROOT}/articles?limit=${NUMBER_RECORD_LIMIT}`),
    get: slug => axios.get(`${API_ROOT}/articles/${slug}`),
};

export { ArticleAPI };

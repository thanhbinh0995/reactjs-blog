import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { loadingBarReducer } from 'react-redux-loading-bar';

import articles from './article';
import whiskies from './whisky';
const rootReducer = combineReducers({
    form: formReducer,
    loadingBar: loadingBarReducer,
    articles,
    whiskies,
});

export default rootReducer;

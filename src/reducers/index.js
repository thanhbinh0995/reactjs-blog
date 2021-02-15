import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { loadingBarReducer } from 'react-redux-loading-bar';

import articles from './article';
import whiskies from './whisky';
import counter from './counter';

const rootReducer = combineReducers({
    form: formReducer,
    loadingBar: loadingBarReducer,
    articles,
    whiskies,
    counter,
});

export default rootReducer;

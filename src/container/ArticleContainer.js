import { connect } from 'react-redux';
import ArticlePage from '../_pages/article';
import { ARTICLE_TYPES } from '../types';

function mapStateToProps(state) {
    return {
        ...state.articles,
    };
}

const mapDispatchToProps = dispatch => ({
    getArticle: data => dispatch({ type: ARTICLE_TYPES.GET_ARTICLE, payload: { data } }),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ArticlePage);

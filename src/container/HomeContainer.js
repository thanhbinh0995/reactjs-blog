import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadArticles } from '../action-creators';
import HomePage from '../pages/home';

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            loadArticles,
        },
        dispatch
    );

const mapStateToProps = state => ({
    ...state.articles,
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);

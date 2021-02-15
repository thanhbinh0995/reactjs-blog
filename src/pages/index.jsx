import React from 'react';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loadArticles } from '../action-creators';
import Nav from '../_pages/common/Nav';
import Footer from '../_pages/common/Footer';
import { DefaultButton, LoadingComponent } from '../common/components';
import ListArticles from '../_pages/home/ListArticles';

class App extends React.Component {
    state = {};

    componentDidMount() {
        const { loadArticles: loadArticlesProps } = this.props;
        loadArticlesProps();
    }

    render() {
        const { articles, inProgress, t } = this.props;

        return (
            <div className="app-container">
                <Nav />
                <br />
                <p>{t('Welcome to React Translation')}</p>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            {inProgress || !articles ? (
                                <LoadingComponent />
                            ) : (
                                <ListArticles articles={articles} />
                            )}
                            <div className="clearfix">
                                <DefaultButton>Order Posts</DefaultButton>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    counter: state.counter.value,
    ...state.articles,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            loadArticles,
        },
        dispatch
    );

App.propTypes = {
    loadArticles: PropTypes.func.isRequired,
    articles: PropTypes.array,
    inProgress: PropTypes.bool,
};

App.defaultProps = {
    articles: [],
    inProgress: false,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withNamespaces('translations')(App));

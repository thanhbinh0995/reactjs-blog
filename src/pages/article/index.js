import React from 'react';
import PropTypes from 'prop-types';
import Header from '../common/Header';

class ArticlePage extends React.Component {
    componentDidMount() {
        const { getArticle, match } = this.props;
        const slug = match.params.id;
        getArticle({ slug });
    }

    render() {
        const { article } = this.props;
        if (!article) {
            return null;
        }
        return (
            <div className="article-page">
                <Header
                    component="Home"
                    title="Clean Blog"
                    subheading="A Blog Theme by Start Bootstrap"
                />
                <div className="banner">
                    <div className="container">
                        <h1>{article.title}</h1>
                    </div>
                </div>
                <div className="container page">
                    <div className="row article-content">
                        <div className="col-xs-12">
                            <p>{article.description}</p>
                            <ul className="tag-list">
                                {article.tagList &&
                                    article.tagList.map(tag => (
                                        <li className="tag-default tag-pill tag-outline" key={tag}>
                                            {tag}
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
        );
    }
}

ArticlePage.propTypes = {
    match: PropTypes.object.isRequired,
    article: PropTypes.object,
    getArticle: PropTypes.func.isRequired,
};

ArticlePage.defaultProps = {
    article: null,
};

export default ArticlePage;
